import {render,screen, waitFor} from '@testing-library/react';
import toBeInTheDocument from '@testing-library/jest-dom';
import React from 'react';
import EmpList from './EmpList';
import TableComp from './TableComp';
import {server} from '../mocks/server';
import {handlers} from '../mocks/handlers';

describe('checking for the data on mount of the page',()=>{
    it('displays the mock the data',async()=>{
        //server.use(handlers);
        render(<TableComp/>);
        await waitFor(()=>{
            expect(screen.findByText('2')).toBeInTheDocument()
            expect(screen.findByText('Rajeswari')).toBeInTheDocument()
            expect(screen.findByText('SSD')).toBeInTheDocument()
            expect(screen.findByText('Bharani')).toBeInTheDocument()
        })
    })
})