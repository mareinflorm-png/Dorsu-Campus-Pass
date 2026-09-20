import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBadgeProps } from '../types/student';

export function StatusBadge({ isActive }: StatusBadgeProps) {
  return (
    <View style={[styles.badge, isActive ? styles.activeBg : styles.inactiveBg]}>
      <View style={styles.contentRow}>
        <View style={[styles.dot, isActive ? styles.activeDot : styles.inactiveDot]} />
        <Text style={[styles.badgeText, isActive ? styles.activeText : styles.inactiveText]}>
          {isActive ? 'STATUS: VERIFIED ACTIVE PASS' : 'STATUS: PASS SUSPENDED'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 8,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    marginRight: 8,
  },
  activeBg: { 
    backgroundColor: '#D8F7E5' 
  },
  inactiveBg: { 
    backgroundColor: '#FFE0E0' 
  },
  badgeText: { 
    fontWeight: 'bold', 
    fontSize: 11,
    textAlign: 'center',
  },
  activeDot: {
    backgroundColor: '#16A65B',
  },
  inactiveDot: {
    backgroundColor: '#D52F2F',
  },
  activeText: {
    color: '#147443',
  },
  inactiveText: {
    color: '#9C2929',
  },
});