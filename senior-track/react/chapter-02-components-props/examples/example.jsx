function StatCard({ label, value }) {
  return (
    <article>
      <h3>{label}</h3>
      <p>{value}</p>
    </article>
  );
}

export default function DashboardStats() {
  return (
    <section>
      <StatCard label="Visitors" value="12,430" />
      <StatCard label="Sales" value="$8,240" />
    </section>
  );
}
