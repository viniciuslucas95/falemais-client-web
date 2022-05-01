import { CreatePlanDto } from "../../dto/plans/create-plans.dto";
import { GetPlanDto } from "../../dto/plans/get-plans.dto";
import { PlansRepository } from "../../repositories/plans/plans.repository";
import { DefaultService } from "../default-service.service";
import { PlansService } from "./plans.service";

export class DefaultPlansService extends DefaultService<GetPlanDto, CreatePlanDto, PlansRepository> implements PlansService { }