// MentalCareDashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Typography, Paper } from '@mui/material';
import Sidebar from './Sidebar'; 


const mockData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', message: 'Need help with stress management.' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'Looking for meditation tips.' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', message: 'Interested in mental wellness programs.' },
];

const MentalCareDashboard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Simulating data fetch
    setCustomers(mockData);
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Container>
          <Typography variant="h4" gutterBottom>
            Mental Care Dashboard
          </Typography>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Message</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.message}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default MentalCareDashboard;
