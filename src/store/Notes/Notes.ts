import { Module } from "vuex";
import { gettersTypes, actionTypes, mutationTypes } from "./types";

export const notesModule: Module<any, any> = {
	namespaced: true,
	state: {
		notes: [
			{
				id: 1,
				priority: "low",
				title: "First note",
				descr: "Description for first note",
				date: new Date(Date.now()).toLocaleString()
			},
			{
				id: 2,
				priority: "middle",
				title: "Second note",
				descr: "Description for second note",
				date: new Date(Date.now()).toLocaleString()
			},
			{
				id: 3,
				priority: "high",
				title: "Third note",
				descr: "Description for third note",
				date: new Date(Date.now()).toLocaleString()
			}
		],
		title: "Notes App"
	},
	getters: {},
	actions: {},
	mutations: {}
};