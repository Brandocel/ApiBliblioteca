import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, Image, useWindowDimensions } from 'react-native';
import { Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DashboardScreen = () => {
  const { width: screenWidth } = useWindowDimensions();

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const outputData = {
    labels: ["1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"],
    datasets: [
      {
        data: [1, 2, 3, 5, 4, 6, 3],
      },
    ],
  };

  const inputData = {
    labels: ["7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM"],
    datasets: [
      {
        data: [1, 2, 3, 5, 4, 6, 3],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Avatar.Image size={40} source={{ uri: 'https://example.com/path/to/your/image.jpg' }} />
          <Text style={styles.profileName}>John Doe</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.cardsRow}>
            <Card style={[styles.card, screenWidth < 768 && styles.cardMobile]}>
              <Card.Content>
                <MaterialCommunityIcons name="battery" size={40} color="#3498db" />
                <Title style={styles.free}>45</Title>
                <Paragraph>Free</Paragraph>
              </Card.Content>
            </Card>
            <Card style={[styles.card, screenWidth < 768 && styles.cardMobile]}>
              <Card.Content>
                <MaterialCommunityIcons name="car" size={40} color="#e74c3c" />
                <Title style={styles.occupied}>25</Title>
                <Paragraph>Ocupated</Paragraph>
              </Card.Content>
            </Card>
            <Card style={[styles.card, screenWidth < 768 && styles.cardMobile]}>
              <Card.Content>
                <MaterialCommunityIcons name="calendar-clock" size={40} color="#9b59b6" />
                <Title style={styles.reserved}>9</Title>
                <Paragraph>Reserved</Paragraph>
              </Card.Content>
            </Card>
            <Card style={[styles.card, screenWidth < 768 && styles.cardMobile]}>
              <Card.Content>
                <MaterialCommunityIcons name="alert-circle" size={40} color="#95a5a6" />
                <Title style={styles.disabled}>2</Title>
                <Paragraph>Disabled</Paragraph>
              </Card.Content>
            </Card>
          </View>
          <View style={[styles.statisticsRow, screenWidth < 768 && styles.statisticsRowMobile]}>
            <View style={[styles.statisticsSection, screenWidth < 768 && styles.statisticsSectionMobile]}>
              <Text style={styles.sectionTitle}>Output Statistics</Text>
              <BarChart
                data={outputData}
                width={screenWidth < 768 ? screenWidth * 0.9 : screenWidth * 0.45}
                height={220}
                chartConfig={chartConfig}
                verticalLabelRotation={30}
                style={styles.chart}
                yAxisLabel=""
                yAxisSuffix=""
              />
            </View>
            <View style={[styles.statisticsSection, screenWidth < 768 && styles.statisticsSectionMobile]}>
              <Text style={styles.sectionTitle}>Input Statistics</Text>
              <LineChart
                data={inputData}
                width={screenWidth < 768 ? screenWidth * 0.9 : screenWidth * 0.45}
                height={220}
                chartConfig={chartConfig}
                style={styles.chart}
                yAxisLabel=""
                yAxisSuffix=""
              />
            </View>
          </View>
          <View style={styles.carsRow}>
            <Card style={[styles.carCard, screenWidth < 768 && styles.carCardMobile]}>
              <Image
                source={{ uri: 'https://example.com/path/to/clubcar.jpg' }}
                style={styles.carImage}
                resizeMode="cover"
              />
              <Card.Content style={styles.carCardContent}>
                <Title style={styles.carTitle}>Club Car</Title>
                <Paragraph>For 2 person</Paragraph>
              </Card.Content>
            </Card>
            <Card style={[styles.carCard, screenWidth < 768 && styles.carCardMobile]}>
              <Image
                source={{ uri: 'https://th.bing.com/th/id/OIG3.3OtdaLsfP4w9QZVKqA.x?w=1024&h=1024&rs=1&pid=ImgDetMain' }}
                style={styles.carImage}
                resizeMode="cover"
              />
              <Card.Content style={styles.carCardContent}>
                <Title style={styles.carTitle}>Yamaha</Title>
                <Paragraph>For 4 person</Paragraph>
              </Card.Content>
            </Card>
            <Card style={[styles.carCard, screenWidth < 768 && styles.carCardMobile]}>
              <Image
                source={{ uri: 'https://example.com/path/to/ezgo.jpg' }}
                style={styles.carImage}
                resizeMode="cover"
              />
              <Card.Content style={styles.carCardContent}>
                <Title style={styles.carTitle}>E-Z GO</Title>
                <Paragraph>For 6 person</Paragraph>
              </Card.Content>
            </Card>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
  },
  main: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileName: {
    fontSize: 16,
    marginLeft: 10,
    color: '#2c3e50',
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  card: {
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardMobile: {
    width: '48%',
  },
  free: {
    color: '#3498db',
    fontSize: 24,
    fontWeight: 'bold',
  },
  occupied: {
    color: '#e74c3c',
    fontSize: 24,
    fontWeight: 'bold',
  },
  reserved: {
    color: '#9b59b6',
    fontSize: 24,
    fontWeight: 'bold',
  },
  disabled: {
    color: '#95a5a6',
    fontSize: 24,
    fontWeight: 'bold',
  },
  statisticsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statisticsRowMobile: {
    flexDirection: 'column',
  },
  statisticsSection: {
    width: '48%',
  },
  statisticsSectionMobile: {
    width: '100%',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  chart: {
    borderRadius: 16,
    marginVertical: 8,
  },
  carsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  carCard: {
    width: '30%',
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  carCardMobile: {
    width: '48%',
  },
  carImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  carCardContent: {
    padding: 10,
  },
  carTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
});

export default DashboardScreen;
