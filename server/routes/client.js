import express from "express";
import {
  getProducts,
  getCustomers,
  getCustomersCount,
  getRecruiterCount,
  getRecruiters,
  getCandidates,
  getTransactions,
  getGeography,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/customercount", getCustomersCount);
router.get("/recruitercount", getRecruiterCount);
// router.get("/candidatecount", getCandidateCount);
router.get("/recruiters", getRecruiters);
router.get("/candidates", getCandidates);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;
