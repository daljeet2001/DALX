import projectModel from '../models/project.model.js';
import * as projectService from '../services/project.service.js';
// import userModel from '../../user/models/user.model.js';
import {subscribeToQueue} from '../services/rabbit.js';
import { validationResult } from 'express-validator';
let userId;

subscribeToQueue('loguserid', (data) => {
    console.log('Message received: ', JSON.parse(data));
    userId = JSON.parse(data);
}   );

subscribeToQueue('loguserid2', (data) => {
    console.log('Message received: ', JSON.parse(data));
    userId = JSON.parse(data);
}   );



export const createProject = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const { name } = req.body;
   
        const newProject = await projectService.createProject({ name, userId });

        res.status(201).json(newProject);

    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}

export const getAllProject = async (req, res) => {
    try {

        const allUserProjects = await projectService.getAllProjectByUserId({
            userId: userId
        })

        return res.status(200).json({
            projects: allUserProjects
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }
}

export const addUserToProject = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const { projectId, users } = req.body
        // console.log(projectId)

        // const loggedInUser = await userModel.findOne({
        //     email: req.user.email
        // })


        const project = await projectService.addUsersToProject({
            projectId,
            users,
            userId:userId
        })

        return res.status(200).json({
            project,
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }


}

export const getProjectById = async (req, res) => {

    const { projectId } = req.params;

    try {

        const project = await projectService.getProjectById({ projectId });

        return res.status(200).json({
            project
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }

}

export const updateFileTree = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const { projectId, fileTree } = req.body;

        const project = await projectService.updateFileTree({
            projectId,
            fileTree
        })

        return res.status(200).json({
            project
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }

}