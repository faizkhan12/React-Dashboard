import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import {
  DownloadOutlined,
  EmailOutlined,
  PointOfSaleOutlined,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import LineChart from "../../components/LineChart";
import { BarChart } from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import { Geochart } from "../../components/GeoChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.gray[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* Grid Charts  */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,300"
            subtitle="Email Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailOutlined
                sx={{
                  fontSize: "26px",
                  color: colors.greenAccent[600],
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="500,000"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+4%"
            icon={
              <PointOfSaleOutlined
                sx={{
                  fontSize: "26px",
                  color: colors.greenAccent[600],
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="424,454"
            subtitle="New Clients"
            progress="0.50"
            increase="+5%"
            icon={
              <PersonAdd
                sx={{
                  fontSize: "26px",
                  color: colors.greenAccent[600],
                }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="9,002,320"
            subtitle="Taffics"
            progress="0.80"
            increase="+39%"
            icon={
              <Traffic
                sx={{
                  fontSize: "26px",
                  color: colors.greenAccent[600],
                }}
              />
            }
          />
        </Box>

        {/* Row 2 */}
        <Box
          gridTemplateColumns="repeat(12,1fr)"
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt="25px"
            p="0 30px"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.gray[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.greenAccent[500]}
              >
                2 Billions
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{
                    fontSize: "26px",
                    color: colors.greenAccent[500],
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" ml="-20px">
            <LineChart isDashboard />
          </Box>

          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.gray[100]}
              p="15px"
            >
              <Typography
                color={colors.gray[100]}
                variant="h5"
                fontWeight="600"
              >
                Recent Transactions
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
