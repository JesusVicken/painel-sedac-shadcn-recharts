// src/components/GraficoBarra.jsx
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts"

const data = [
    { name: "Janeiro", valor: 40 },
    { name: "Fevereiro", valor: 30 },
    { name: "Março", valor: 20 },
    { name: "Abril", valor: 27 },
]

export default function GraficoBarra() {
    return (
        <div className="rounded-2xl border p-4 shadow bg-white dark:bg-zinc-900">
            <h2 className="text-lg font-semibold mb-4">Exemplo de Gráfico</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="valor" fill="#6366f1" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
