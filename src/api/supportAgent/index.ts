import server from "..";
import { SupportAgentRequestInterface } from "../../utils/interface/supportAgentRequest.interface";

export const getAllSupportAgents = async() => {
    try {
        const response = await server.get('/supportAgent/all');
        if(response) {
            return response.data;
        } else {
            return {
                error: true,
                data: []
            }
        }
    } catch (error) {
        console.log('error getting all agents', error);
    }
}

export const saveSupportAgent = async(data: SupportAgentRequestInterface) => {
    try {
        const response = await server.post('/supportAgent/save', {...data});
        return response.data;
    } catch (error) {
        console.log('error getting all agents', error);
    }
}