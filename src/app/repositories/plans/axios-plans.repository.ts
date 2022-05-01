import { CreatePlanDto } from "../../dto/plans/create-plans.dto";
import { GetPlanDto } from "../../dto/plans/get-plans.dto";
import { AxiosRepository } from "../axios-repository.repository";
import { PlansRepository } from "./plans.repository";

export class AxiosPlansRepository extends AxiosRepository<GetPlanDto, CreatePlanDto> implements PlansRepository { }