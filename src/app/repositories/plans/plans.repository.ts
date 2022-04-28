import { GetPlanDto } from "../../dto/get-plans.dto";
import { Repository } from "../repository";

export interface PlansRepository extends Repository<GetPlanDto> { }