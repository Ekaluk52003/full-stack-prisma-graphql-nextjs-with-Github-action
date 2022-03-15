import type { NextPage } from "next";
import InvoiceList from "./components/InvoiceList";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import moment, { Moment } from "moment";
import {
  Button,
  Grid,
  Menu,
  MenuItem,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import withAuth from "../utils/withAuth";

import { useSuminvQuery } from "../generated";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Invoices: NextPage = () => {
  const { data, loading } = useSuminvQuery();
  if (loading) return "loading";

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 2 }} alignContent='space-between'>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 6, borderRadius: 5 }} elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                {" "}
                <Typography variant='h4'>This week Sale</Typography>
                <Typography variant='h3'>
                  ${data.suminvoices[0].amount}
                </Typography>{" "}
              </Box>
              <Box>
                <EqualizerIcon style={{ fontSize: 80 }} />
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 6, borderRadius: 5 }} elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                {" "}
                <Typography variant='h4'>Have a great day</Typography>
                <Typography variant='h3'>
                  {moment(new Date()).format("DD-MMM-YY")}
                </Typography>{" "}
              </Box>
              <Box>
                <CalendarTodayIcon style={{ fontSize: 80 }} />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Paper sx={{ p: 6, borderRadius: 5 }} elevation={0}>
        <Grid container spacing={3}>
          <InvoiceList />
        </Grid>
      </Paper>
    </>
  );
};

export default withAuth(Invoices);
