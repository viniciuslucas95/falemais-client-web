import { GetPlanDto } from "../../dto/get-plans.dto";
import { PlansRepository } from "../../repositories/plans/plans.repository";

export interface PlansService {
    repository: PlansRepository
    find(): Promise<GetPlanDto[]>
}