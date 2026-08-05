import { Request, Response } from "express";

export class TicketController {

    //DI - WssService
    constructor(){}

    public getTickets = async(req: Request, res: Response) => {
        res.json('getTickets')
    }

    public getLastTicketNumber = async(req: Request, res: Response) => {
        res.json('getLastTicketNumber')
    }

    public pendingTickets = async(req: Request, res: Response) => {
        res.json('pendingTickets')
    }
    
    public createTicket = async(req: Request, res: Response) => {
        res.json('createTicket')
    }

    public drawTickets = async(req: Request, res: Response) => {
        res.json('drawTickets')
    }
    
    public ticketFinished = async(req: Request, res: Response) => {
        res.json('ticketFinished')
    }
    
    public workingOn = async(req: Request, res: Response) => {
        res.json('workingOn')
    }        
}
