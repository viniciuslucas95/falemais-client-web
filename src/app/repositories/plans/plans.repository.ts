import { CreatePlanDto } from "../../dto/plans/create-plans.dto";
import { GetPlanDto } from "../../dto/plans/get-plans.dto";
import { Repository } from "../repository.repository";

export interface PlansRepository extends Repository<GetPlanDto, CreatePlanDto> { }