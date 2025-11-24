import { QuizHistoryStats } from '@/hooks/useQuizHistory';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Target, TrendingUp, BookOpen } from 'lucide-react';

interface AnalyticsDashboardProps {
  stats: QuizHistoryStats;
}

export const AnalyticsDashboard = ({ stats }: AnalyticsDashboardProps) => {
  const statCards = [
    {
      title: 'Total Attempts',
      value: stats.totalAttempts,
      icon: Target,
      color: 'text-primary'
    },
    {
      title: 'Pass Rate',
      value: `${stats.passRate.toFixed(1)}%`,
      icon: TrendingUp,
      color: 'text-green-500'
    },
    {
      title: 'Average Score',
      value: `${stats.averageScore.toFixed(1)}%`,
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      title: 'Courses Completed',
      value: stats.uniqueCourses,
      icon: BookOpen,
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {statCards.map((stat, index) => (
        <Card key={index} className="border-border/50">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground flex items-center gap-2">
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
