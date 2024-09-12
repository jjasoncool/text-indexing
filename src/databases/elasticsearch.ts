import { Client } from "@elastic/elasticsearch";
import config from "../configs";

// singleton instance of elasticsearch client
const elasticsearch = new Client(config.databases.elasticsearch);

export default elasticsearch;
