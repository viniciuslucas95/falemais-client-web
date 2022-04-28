import { GetPlanDto } from "../../dto/get-plans.dto";
import { PlansRepository } from "../../repositories/plans/plans.repository";
import { PlansService } from "./plans.service";

export class DefaultPlansService implements PlansService {
    constructor(public repository: PlansRepository) { }

    async find(): Promise<GetPlanDto[]> {
        return this.repository.find()
    }
}