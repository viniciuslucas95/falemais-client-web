import { CreatePlanDto } from "../../dto/plans/create-plans.dto";
import { GetPlanDto } from "../../dto/plans/get-plans.dto";
import { PlansRepository } from "../../repositories/plans/plans.repository";
import { Service } from "../service.service";

export interface PlansService extends Service<GetPlanDto, CreatePlanDto, PlansRepository> { }