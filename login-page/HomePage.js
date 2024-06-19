import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
import PopularJobs from './HomePage/PopularJobs';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const JobCard = ({ title, company, salary, location }) => {
    const backgroundColor = getRandomColor();
    return (
        <View style={{
            backgroundColor: backgroundColor,
            borderRadius: 24,
            shadowColor: "#000", padding: 15, marginRight: 15
        }}>
            <View style={styles.topRow}>

                <Image source={require('./assets/image2.png')} style={{ width: 44, height: 44 }} />
                <Image source={require('./assets/facebook.png')} style={{ width: 22, height: 22, position: 'absolute', left: 10 }} />

                <View>
                    <Text style={{ fontSize: 18, fontWeight: 600, color: 'white' }}>{title}</Text>
                    <Text style={{ fontSize: 15, fontWeight: 400, color: 'white' }}>{company}</Text>
                </View>

            </View>
            <View style={styles.bottomRow}>
                <Text style={{ fontSize: 14, fontWeight: 500, color: 'white' }}>{salary}</Text>
                <Text style={{ fontSize: 14, fontWeight: 500, color: 'white' }}>{location}</Text>
            </View>
        </View>

    )
}



function HomePage() {
    return (
        <>
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: '700' }}>Nana Gyanfosu</Text>
                    <Text style={{ fontSize: 20, fontWeight: '400', color: '#95969D' }}>ngyanfosu@gmail.com</Text>
                </View>

                <View>
                    <Image source={require('./assets/image.png')} style={{ width: 40, height: 40, borderRadius: 100 }} />
                    <View style={styles.activeDot} />
                </View>

            </View>

            <View style={styles.searchRow}>
                <View style={styles.searchBar}>
                    <Icon style={{ padding: 10 }} name="search" size={17} />
                    <TextInput placeholder='Search for a job or position' style={{ width: '90%', left: '20', backgroundColor: '#F2F2F3', }} ></TextInput>
                </View>
                <Image source={require('./assets/image2.png')} style={{ height: 45, width: 45, backgroundColor: '#F2F2F3', }} />
                <Image source={require('./assets/image copy.png')} style={{ height: 30, width: 30, marginHorizontal: 10, position: 'absolute', right: -3 }} />
            </View>

            <View style={styles.subHeader}>
                <Text style={{ fontSize: 20, fontWeight: 600 }}>Featured jobs</Text>
                <Text style={{ fontSize: 14, fontWeight: 400 }}>See more</Text>
            </View>


            <View style={styles.cardContents}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <JobCard title="Software Engineer" company="Facebook" salary="$180,000" location="Accra, Ghana" />

                    <JobCard title="Computer Engineer" company="Google" salary="$100,000" location="New York City, US" />

                    <JobCard title="Actuarial Scientist" company="UG" salary="$100,000" location="New Jersey, US" />

                    <JobCard title="Frontend Developer" company="Pinterest" salary="$120,000" location="Kumasi, Ghana" />

                    <JobCard title="Psychiatrist" company="Mental Hospital" salary="$100,000" location="South Korea, Asia" />

                    <JobCard title="Data Analyst" company="Huawei" salary="$80,000" location="Beijing, China" />

                    <JobCard title="Software Tester" company="Snapchat" salary="$10,000" location="California, US" />

                    <JobCard title="NSMQ Trainer" company="PRESEC" salary="$5,000" location="Legon, Ghana" />

                    <JobCard title="Software Dev Professor" company="KNUST" salary="$11,000" location="Kumasi, Ghana" />

                    <JobCard title="Chief Pharmacist" company="TopUp Pharmacy" salary="$40,000" location="Tamale, Ghana" />

                    <JobCard title="Chemistry Professor" company="UG" salary="$20,000" location="Legon, Ghana" />

                    <JobCard title="PenTest Hacker" company="Amazon" salary="$220,000" location="Accra, Ghana"
                     />
    
        



                </ScrollView>
            </View>



   
      <PopularJobs/>
 

        </ScrollView >
        </>
    );
}


const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    activeDot: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: 'red',
        position: 'absolute',
        right: 1,
    },
    searchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        , marginTop: 30
    },
    searchBar: {
        backgroundColor: '#F2F2F3',
        width: screenWidth - 90,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    subHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        padding: 5,
        backgroundColor: '#F2F2F3',

    },
    cardContents: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        padding: 5,

    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginStart: -4,
        marginEnd: 35,

    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 90,
        marginTop: 90,
    },

    card: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        marginBottom: 20,
    }
}
)


export default HomePage;