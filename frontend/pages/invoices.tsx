import InvoiceList from "./components/InvoiceList";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import moment from "moment";
import { Grid, Typography, Box, Paper } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import withAuth from "../utils/withAuth";
import { useSuminvQuery } from "../generated";

const Invoices = () => {
  const { data, loading, error } = useSuminvQuery({
    fetchPolicy: "network-only",
  });
  if (loading) return <p>loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <>
      <Grid container spacing={0}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 3,
            width: "100%",
          }}
        >
          <Paper sx={{ p: 6, borderRadius: 5 }} elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant='body1'>Last day invoice</Typography>
                <Typography variant='h4'>
                  ${data.suminvoices && data.suminvoices[0].amount}
                </Typography>
              </Box>
              <Box>
                <EqualizerIcon color='primary' style={{ fontSize: 70 }} />
              </Box>
            </Box>
          </Paper>

          <Paper sx={{ p: 6, borderRadius: 5 }} elevation={0}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant='body1'>Have a great day</Typography>
                <Typography variant='h4'>
                  {moment(new Date()).format("DD-MMM-YY")}
                </Typography>{" "}
              </Box>
              <Box>
                <CalendarTodayIcon color='primary' style={{ fontSize: 70 }} />
              </Box>
            </Box>
          </Paper>
        </Box>
        <Paper
          sx={{
            width: "90vw",
            borderRadius: 5,
            overflowX: "auto",
            mt: 2,
            p: 2,
          }}
          elevation={0}
        >
          <InvoiceList />
        </Paper>
      </Grid>
    </>
  );
};
//@ts-ignore
export default withAuth(Invoices);
