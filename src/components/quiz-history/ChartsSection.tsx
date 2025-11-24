import { QuizHistoryStats } from '@/hooks/useQuizHistory';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

interface ChartsSectionProps {
  stats: QuizHistoryStats;
}

export const ChartsSection = ({ stats }: ChartsSectionProps) => {
  // Prepare data for score trend chart
  const scoreTrendData = stats.recentAttempts
    .slice()
    .reverse()
    .map((attempt, index) => ({
      name: format(new Date(attempt.lastAttempt), 'MMM dd'),
      score: attempt.score,
      attempt: index + 1,
    }));

  // Prepare data for course performance chart
  const coursePerformanceData = stats.courseBreakdown
    .slice(0, 5)
    .map(course => ({
      name: course.courseName.length > 20 
        ? course.courseName.substring(0, 20) + '...' 
        : course.courseName,
      score: course.bestScore,
      attempts: course.attempts,
    }));

  // Prepare data for pass/fail pie chart
  const passFailData = [
    { name: 'Passed', value: stats.totalPassed, color: 'hsl(var(--chart-2))' },
    { name: 'Failed', value: stats.totalFailed, color: 'hsl(var(--chart-1))' },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold">Performance Analytics</h2>
      
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Score Trend Chart */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-sm sm:text-base">Score Trend (Recent Attempts)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={scoreTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--popover))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--popover-foreground))'
                  }}
                  formatter={(value: number) => [`${value.toFixed(1)}%`, 'Score']}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pass/Fail Distribution */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-sm sm:text-base">Pass/Fail Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={passFailData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="hsl(var(--primary))"
                  dataKey="value"
                >
                  {passFailData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--popover))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--popover-foreground))'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Course Performance Comparison */}
        <Card className="border-border/50 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm sm:text-base">Course Performance (Top 5)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={coursePerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--popover))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--popover-foreground))'
                  }}
                  formatter={(value: number) => [`${value.toFixed(1)}%`, 'Best Score']}
                />
                <Legend />
                <Bar 
                  dataKey="score" 
                  fill="hsl(var(--primary))" 
                  radius={[8, 8, 0, 0]}
                  name="Best Score"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
