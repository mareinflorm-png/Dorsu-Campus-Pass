import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, ScrollView, View, SafeAreaView } from 'react-native';
import { StudentCard } from './src/components/StudentCard';
import { ScanCounter } from './src/components/ScanCounter';
import { StudentProfile } from './src/types/student';

const primaryStudent: StudentProfile = {
  name: 'MARIEN FLOR B. MONTECALVO',
  idNumber: '2023-1332',
  program: 'BS Information Technology (BSIT)',
  yearLevel: '3rd Year - Section F',
  avatarUrl: require('./src/components/myprofile.png'),
  campus: 'Main Campus (Guang-guang, Mati City)',
};

const peerStudent: StudentProfile = {
  name: 'Monica Mae B. Montecalvo',
  idNumber: '2024-2494-MT',
  program: 'BS Information Technology (BSIT)',
  yearLevel: '3rd Year - Section F',
  avatarUrl: require('./src/components/myprofile.jpg'),
  campus: 'Main Campus (Guang-guang, Mati City)',
};

export default function App() {
  const [scanCount, setScanCount] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [showPeer, setShowPeer] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        {/* Header Banner */}
        <View style={styles.headerBanner}>
          <Text style={styles.headerTitle}>DAVAO ORIENTAL STATE UNIVERSITY</Text>
          <Text style={styles.headerSub}>FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY</Text>
          <View style={styles.pillTag}>
            <Text style={styles.pillText}>OFFICIAL STUDENT DIGITAL PASS • AY 2026–2027</Text>
          </View>
        </View>

        {/* Primary Student Card Component */}
        <StudentCard student={primaryStudent} isActive={isActive} />

        {/* Scan Counter Log Component */}
        <ScanCounter
          count={scanCount}
          onScan={() => setScanCount(prev => prev + 1)}
          onReset={() => setScanCount(0)}
        />

        {/* Action Buttons */}
        <Pressable 
          style={styles.toggleBtn} 
          onPress={() => setIsActive(prev => !prev)}
        >
          <Text style={styles.toggleText}>
            {isActive ? '⚠️ Simulate Pass Suspension' : '⚠️ Activate Pass'}
          </Text>
        </Pressable>

        <Pressable 
          style={styles.peerBtn} 
          onPress={() => setShowPeer(prev => !prev)}
        >
          <Text style={styles.peerText}>
            {showPeer ? 'Hide Peer Component Demo' : 'Show Peer Component Demo'}
          </Text>
        </Pressable>

        {/* Peer Props Demo Section */}
        {showPeer && (
          <View style={styles.peerSection}>
            <Text style={styles.peerHeader}>PEER PROPS DEMO:</Text>
            <StudentCard student={peerStudent} isActive={true} />
          </View>
        )}
      </ScrollView>

      {/* Bottom Navigation Visual Bar */}
      <View style={styles.bottomNav}>
        <View style={styles.navItemActive}>
          <View style={styles.homeIcon} />
          <Text style={styles.navTextActive}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <View style={styles.exploreIcon} />
          <Text style={styles.navText}>Explore</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F7FA', 
    paddingTop: 35,
  },
  scroll: { 
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  headerBanner: {
    backgroundColor: '#006677',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 14,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  headerSub: {
    color: '#E0F2F1',
    fontSize: 8.5,
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 8,
  },
  pillTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  pillText: {
    color: '#FFFFFF',
    fontSize: 7.5,
    fontWeight: 'bold',
  },
  toggleBtn: { 
    backgroundColor: '#FFF8E1', 
    borderColor: '#FFE082',
    borderWidth: 1,
    paddingVertical: 12, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 10 
  },
  toggleText: { 
    fontWeight: 'bold', 
    color: '#B78103',
    fontSize: 13,
  },
  peerBtn: { 
    backgroundColor: '#FFFFFF', 
    borderColor: '#E2E8F0',
    borderWidth: 1,
    paddingVertical: 12, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 12 
  },
  peerText: { 
    fontWeight: '500', 
    color: '#2D3748',
    fontSize: 13,
  },
  peerSection: { 
    marginTop: 2 
  },
  peerHeader: { 
    fontWeight: 'bold', 
    fontSize: 11,
    marginBottom: 8,
    color: '#006677',
    letterSpacing: 0.5,
  },
  // Bottom Tab Bar Styles
  bottomNav: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EDF2F7',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItemActive: {
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 16,
  },
  navItem: {
    alignItems: 'center',
  },
  homeIcon: {
    width: 14,
    height: 14,
    backgroundColor: '#1E293B',
    borderRadius: 3,
    marginBottom: 2,
  },
  exploreIcon: {
    width: 14,
    height: 10,
    borderWidth: 2,
    borderColor: '#64748B',
    borderRadius: 2,
    marginBottom: 2,
  },
  navTextActive: {
    fontSize: 10,
    color: '#1E293B',
    fontWeight: '600',
  },
  navText: {
    fontSize: 10,
    color: '#64748B',
  },
});