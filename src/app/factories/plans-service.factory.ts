import { AxiosPlansRepository } from "../repositories/plans/axios-plans.repository"
import { DefaultPlansService } from "../services/plans/default-plans.service"

export class PlansServiceFactory {
    create() {
        const repository = new AxiosPlansRepository((import.meta.env.URL || 'http://localhost:3001') + '/plans')
        return new DefaultPlansService(repository)
    }
}