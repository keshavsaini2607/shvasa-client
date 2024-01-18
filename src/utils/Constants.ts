export interface HomeTabsInterface {
    title: string;
    key: 'supportAgents' | 'supportTickets',
    id: string;
}

export const HomeTabs: HomeTabsInterface[] = [
    {
        title: 'Support Agents',
        key: 'supportAgents',
        id: '1'
    },
    {
        title: 'Support Tickets',
        key: 'supportTickets',
        id: '2'
    },
]

export const API = {
    BASE_URL: 'http://localhost:3000/api'
}