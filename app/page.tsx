import reports from "@/workloads/reports";

export const metadata = {
	title: "Next.js and Cron workload example",
};

export default async function Page() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<main className="flex flex-col items-center justify-center flex-1 px-4 sm:px-20 text-center">
				<h1 className="text-lg sm:text-2xl font-bold mb-2">CRON</h1>
				<h2 className="text-md sm:text-xl mx-4">
					ID: {reports.id} - Schedule: {reports.schedule}
				</h2>
			</main>
		</div>
	);
}
