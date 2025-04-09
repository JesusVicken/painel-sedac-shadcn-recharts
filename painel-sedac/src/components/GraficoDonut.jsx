import { PieChart, Pie, Cell } from "recharts"
import { ArrowUpRight } from "lucide-react"

const data = [
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 300 },
    { name: "D", value: 200 },
    { name: "E", value: 100 },
]

const COLORS = ["#f87171", "#60a5fa", "#34d399", "#a78bfa", "#fbbf24"]

export default function GraficoDonut() {
    const total = data.reduce((sum, item) => sum + item.value, 0)

    return (
        <div className="bg-card text-card-foreground p-6 rounded-2xl shadow-md w-full max-w-sm">
            {/* Título */}
            <div className="text-center mb-4">
                <h2 className="text-lg font-semibold">Pie Chart - Donut with Text</h2>
                <p className="text-sm text-muted-foreground">January - June 2024</p>
            </div>

            {/* Donut com valor central */}
            <div className="relative flex justify-center items-center">
                <PieChart width={220} height={220}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={90}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={2}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
                <div className="absolute text-center">
                    <div className="text-2xl font-bold">1.125</div>
                    <div className="text-xs text-muted-foreground">Visitors</div>
                </div>
            </div>

            {/* Info extra abaixo */}
            <div className="mt-4 text-center">
                <div className="flex items-center justify-center text-green-500 font-medium">
                    <ArrowUpRight className="w-4 h-4 mr-1" />
                    Trending up by 5.2% this month
                </div>
                <p className="text-sm text-muted-foreground">
                    Showing total visitors for the last 6 months
                </p>
            </div>
        </div>
    )
}
