import { Cron } from "@monolayer/workloads";

const reports = new Cron("reports", {
	schedule: "0 * * * *",
	run: async () => {
		console.debug("HELLO");
	},
});

export default reports;
