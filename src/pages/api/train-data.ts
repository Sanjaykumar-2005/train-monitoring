import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import Train from '@/models/Train';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const trainData = await Train.findOne().sort({ timestamp: -1 });
      res.status(200).json(trainData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch train data' });
    }
  } else if (req.method === 'POST') {
    try {
      const trainData = await Train.create(req.body);
      res.status(201).json(trainData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create train data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}