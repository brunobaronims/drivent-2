import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getTicketTypes, getUserTicket } from '@/controllers/tickets-controller';

const ticketsRouter = Router();

ticketsRouter 
    .all('/*', authenticateToken)
    .get('/types', getTicketTypes)
    .get('/', getUserTicket)

export { ticketsRouter };