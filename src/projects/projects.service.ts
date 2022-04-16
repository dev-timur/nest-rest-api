import { Get, Injectable, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IProject from 'src/interfaces/project.interface';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectModel('Project')
        private readonly projectModel: Model<IProject>
      ) {
      }

      getHello(): string {
        return 'Hello World!';
      }
    
      async getAllProjects(): Promise<IProject[]> {
        return await this.projectModel.find({}).populate(['desks','team','responsible','stages', { path: 'desks', populate:['columns']}]).exec()
      }
    
      async createProject(body): Promise<IProject> {
        return await this.projectModel.create(body);
      }

      async getDeskById(body): Promise<IProject> {
        return await this.projectModel.findById({_id: body._id});
      }
    
      async updateProject(body): Promise<IProject> {
        return await this.projectModel.findByIdAndUpdate(body._id, body.newData);
      }
    
      async deleteProject(body): Promise<IProject> {
        return await this.projectModel.findOneAndDelete(body._id);
      }
    }
    