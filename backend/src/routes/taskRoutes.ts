import express, { Request, Response } from "express";
import protect, { AuthRequest } from "../middleware/authMiddleware";
import Task from "../models/Task";

const router = express.Router();

// @route   GET /api/tasks
// @desc    Get all tasks for logged-in user
router.get("/", protect, async (req: Request, res: Response) => {
  const tasks = await Task.find({ user: (req as AuthRequest).user?._id });
  res.json(tasks);
});

// @route   POST /api/tasks
// @desc    Create new task
router.post("/", protect, async (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = await Task.create({
    user: (req as AuthRequest).user?._id,
    title,
  });

  res.status(201).json(task);
});

// @route   PUT /api/tasks/:id
// @desc    Update task
router.put("/:id", protect, async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.user.toString() !== (req as AuthRequest).user?._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  task.title = req.body.title || task.title;
  task.completed =
    req.body.completed !== undefined ? req.body.completed : task.completed;

  const updatedTask = await task.save();
  res.json(updatedTask);
});

// @route   DELETE /api/tasks/:id
// @desc    Delete task
router.delete("/:id", protect, async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.user.toString() !== (req as AuthRequest).user?._id.toString()) {
    return res.status(401).json({ message: "Not authorized" });
  }

  await task.deleteOne();
  res.json({ message: "Task removed" });
});

export default router;
