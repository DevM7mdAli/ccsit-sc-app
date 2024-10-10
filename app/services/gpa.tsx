import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';

interface Grade {
  course: string;
  grade: number;
}

const GPA: React.FC = () => {
  const [grades, setGrades] = useState<Grade[]>([]);
  const [course, setCourse] = useState<string>('');
  const [grade, setGrade] = useState<string>('');

  const addGrade = () => {
    if (course && grade) {
      setGrades([...grades, { course, grade: parseFloat(grade) }]);
      setCourse('');
      setGrade('');
    }
  };

  const calculateGPA = (): string => {
    if (grades.length === 0) return '0.00';
    const total = grades.reduce((sum, g) => sum + g.grade, 0);
    return (total / grades.length).toFixed(2);
  };

  return (
    <View className="flex-1 p-4">
      <View>
      <Text className="text-xl font-bold">GPA Calculator</Text>
      <TextInput
        className="border p-2 my-2"
        placeholder="Course name"
        value={course}
        onChangeText={setCourse}
      />
      <TextInput
        className="border p-2 my-2"
        placeholder="Grade"
        value={grade}
        onChangeText={setGrade}
        keyboardType="numeric"
      />
      <Button title="Add Grade" onPress={addGrade} />
      <Text className="mt-4">Current GPA: {calculateGPA()}</Text>
      </View>


        <ScrollView className='gap-y-5 mt-7' scrollsToTop={true}>
        {grades.map( (val) => {
          return(
            <View className='bg-slate-300 py-3 px-2'>
              <Text>
                name of course {val.course} 
              </Text>
              <Text>
                Grade {val.grade}
              </Text>
            </View>
          )
        } )}
        </ScrollView>

    </View>
    
  );
};

export default GPA;
