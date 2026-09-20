import React from 'react';
import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import { StudentProfile } from '../types/student';
import { StatusBadge } from './StatusBadge';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
  showProfile?: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, isActive, showProfile = true }) => {
  const imageSource: ImageSourcePropType =
    typeof student.avatarUrl === 'string'
      ? { uri: student.avatarUrl }
      : student.avatarUrl;

  return (
    <View style={styles.card}>
      {showProfile ? (
        <View style={styles.topRow}>
          <Image source={imageSource} style={styles.avatar} />
          <View style={styles.details}>
            <Text style={styles.name}>{student.name}</Text>
            <Text style={styles.idNumber}>{student.idNumber}</Text>
            <Text style={styles.program}>{student.program}</Text>
            <Text style={styles.yearLevel}>{student.yearLevel}</Text>
          </View>
        </View>
      ) : <View style={styles.emptyProfileSpace} />}
      <StatusBadge isActive={isActive} />
      <Text style={styles.campus}>Campus: {student.campus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyProfileSpace: {
    height: 88,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  details: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  idNumber: {
    fontSize: 14,
    color: '#003366',
    fontWeight: 'bold',
  },
  program: {
    fontSize: 14,
    color: '#555',
  },
  yearLevel: {
    fontSize: 14,
    color: '#777',
  },
  campus: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
  },
});