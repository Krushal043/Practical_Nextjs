import { buildfeedbackPath, extractFeedback } from ".";

export default function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildfeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}
