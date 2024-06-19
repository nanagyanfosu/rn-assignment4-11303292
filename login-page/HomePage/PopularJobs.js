import { View, Text, StyleSheet, Image} from 'react-native';

const jobs = [
    {id: '1', title: 'Jr Executive', salary: '$96,000/y', company: 'Burger King', location: 'Los Angeles, US', icon: require('../assets/BurgerKing.png')},
    {id: '2', title: 'Lecturer', salary: '$71,000/y', company: 'Burger King', location: 'Tema, Ghana', icon: require('../assets/Beats.png')},

    {id: '3', title: 'Executive', salary: '$86,000/y', company: 'Facebook', location: 'Mexico, North America', icon: require('../assets/Facebook2.png')},
    {id: '4', title: 'Head Of Department', salary: '$88,000/y', company: 'Instagram', location: 'New Jersey, US', icon: require('../assets/BurgerKing.png')},
    {id: '5', title: 'Product Manager', salary: '$84,000/y', company: 'Beats', location: 'Florida, US', icon: require('../assets/Beats.png')},

    {id: '7', title: 'Dean', salary: '$100,000/y', company: 'JBL', location: 'New York City, US', icon: require('../assets/Beats.png')},
    {id: '8', title: 'Vice Chancellor', salary: '$130,000/y', company: 'KA', location: 'Accra, Ghana', icon: require('../assets/Facebook2.png')},
    {id: '9', title: 'Pro Vice Chancellor', salary: '$124,000/y', company: 'EQ Corp', location: 'Kumasi, Ghana', icon: require('../assets/BurgerKing.png')},
];

function PopularJobs (){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Popular Jobs</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
            <View style={styles.jobList}>
                {jobs.map(job => (
                    <View key={job.id} style={styles.jobSection}>
                        <Image source={job.icon} style={styles.icon} />
                        <View style={styles.details}>
                            <Text style={styles.title}>{job.title}</Text>
                            <Text style={styles.salary}>{job.salary}</Text>
                            <Text style={styles.company}>{job.company}</Text>
                            <Text style={styles.location}>{job.location}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 0,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 24,
        marginTop: 30,
    },

    component: {
        paddingVertical: 14,
        paddingHorizontal: 24,
    },

    heading: {
        width: 105,
        height: 21,
        fontSize: 16,
        fontWeight: '600',
        color: '#0D0D26',
        lineHeight: 20.8,
    },
      
    seeAll: {
        width: 42,
        height: 21,
        fontSize: 14,
        fontWeight: '400',
        color: '#95969D',
        lineHeight: 20.8,
    },

    jobList: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        top: 40
    },

    jobSection: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: 380,
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        height: 74,
        bottom: 20,
    },
    
    details: {
        flexDirection: 'column',
        flex: 1,
    },

    icon: {
        marginRight: 20,
    },
    
    title: {
        width: 200,
        height: 18,
        fontSize: 14,
        fontWeight: '600',
        color: '#0D0D26',
        lineHeight: 18.2,
        top: 18,
    },
      
    salary: {
        width: 90,
        height: 19,
        left: 180,
        fontSize: 12,
        fontWeight: '400',
        color: '#0D0D26',
        bottom: 3,
        lineHeight: 19.2,
        textAlign: 'right'
    },
      
    company: {
        width: 74,
        height: 21,
        opacity: 0.50,
        fontSize: 13,
        fontWeight: '400',
        color: '#0D0D26',
        lineHeight: 20.8,
    },
      
    location: {
        width: 150,
        height: 21,
        opacity: 0.50,
        fontSize: 13,
        fontWeight: '400',
        color: '#0D0D26',
        lineHeight: 20.8,
        left: 120,
        textAlign: 'right',
        bottom: 20,
    },
});
    

export default PopularJobs;