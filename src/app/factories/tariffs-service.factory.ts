import { AxiosTariffsRepository } from "../repositories/tariffs/axios-tariffs.repository";
import { DefaultTariffsService } from "../services/tariffs/default-tariffs.service";

export class TariffsServiceFactory {
    create() {
        const repository = new AxiosTariffsRepository((import.meta.env.URL || 'http://localhost:3001') + '/tariffs')
        return new DefaultTariffsService(repository)
    }
}