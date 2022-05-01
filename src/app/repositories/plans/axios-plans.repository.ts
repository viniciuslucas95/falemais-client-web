import axios from 'axios'
import { PlansRepository } from "./plans.repository";
import { GetPlanDto } from "../../dto/get-plans.dto";

export class AxiosPlansRepository implements PlansRepository {
    constructor(public baseUrl: string) { }

    async find(): Promise<GetPlanDto[]> {
        const results = await axios.get<GetPlanDto[]>(this.baseUrl)

        return results.data
    }
}