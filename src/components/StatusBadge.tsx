import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBadgeProps } from '../types/student';

export function StatusBadge({ isActive }: StatusBadgeProps) {
  return (
    <View style={[styles.badge, isActive ? styles.activeBg : styles.inactiveBg]}>
      <View style={styles.contentRow}>
        <View style={styles.dot} />
        <Text style={styles.badgeText}>
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
    backgroundColor: '#ffffff',
    marginRight: 8,
  },
  activeBg: { 
    backgroundColor: '#28a745' 
  },
  inactiveBg: { 
    backgroundColor: '#dc3545' 
  },
  badgeText: { 
    color: '#ffffff', 
    fontWeight: 'bold', 
    fontSize: 11,
    textAlign: 'center',
  },
});