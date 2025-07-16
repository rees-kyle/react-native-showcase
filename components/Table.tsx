import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TableProps {
  headers: string[];
  rows: string[][];
  boldColumnIndex?: number;
}

export default function Table({ headers, rows, boldColumnIndex }: TableProps) {
  return (
    <View style={styles.table}>
      {/* Header Row */}
      <View style={[styles.row, styles.headerRow]}>
        {headers.map((header, i) => (
          <Text key={i} style={[styles.cell, styles.headerCell]}>
            {header}
          </Text>
        ))}
      </View>

      {/* Data Rows */}
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <Text
              key={colIndex}
              style={[
                styles.cell,
                boldColumnIndex === colIndex && styles.boldCell,
              ]}
            >
              {cell}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 6,
    overflow: 'hidden',
    marginVertical: 16,
  },
  row: {
    flexDirection: 'row',
  },
  headerRow: {
    backgroundColor: '#222',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: '#444',
    fontSize: 14,
    color: '#ddd',
  },
  headerCell: {
    fontWeight: 'bold',
    color: '#fff',
  },
  boldCell: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
