<template>
	<div class="wrapper">
		<div class="wrapper-content">
			<section>
				<div class="container">
					<Message v-if="message" :message="message"></Message>
					
					<new-note @addNote="addNote"></new-note>
					
					<div class="note-header">
						
						<h1>{{title}}</h1>
						
<!--						<p>{{search}}</p>-->
						
						<Search :value="search"
								placeholder="Find your note by title"
								@search="search = $event"></Search>
						
						<div class="icons">
							<svg :class="{active:grid}" @click="grid=true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
							<svg :class="{active:!grid}" @click="grid=false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
						</div>
						
					</div>
					
					<Notes :notes="notesFilter" :grid="grid" @remove="removeNote"></Notes>
					
					
				</div>
			</section>
		</div>
		
		
	</div>
</template>

<script>
import Message from "@/components/Message.vue";
import NewNote from "@/components/NewNote.vue";
import Notes from "@/components/Notes.vue";
import Search from "@/components/Search.vue";
export default {
	components: {
		Search,
		Notes,
		NewNote,
		Message,
	},
  data() {
	  return {
		  
		  title: "Notes App",
		  search:'',
		  message: null,
		  grid: true,
		  
		  // notes: [
			//   {
			// 	  id:1,
			// 	  priority: 'low',
			// 	  title: "First note",
			// 	  descr: "Description for first note",
			// 	  date: new Date(Date.now()).toLocaleString()
			//   },
			//   {
			// 	  id:2,
			// 	  priority: 'middle',
			// 	  title: "Second note",
			// 	  descr: "Description for second note",
			// 	  date: new Date(Date.now()).toLocaleString()
			//   },
			//   {
			// 	  id:3,
			// 	  priority: 'high',
			// 	  title: "Third note",
			// 	  descr: "Description for third note",
			// 	  date: new Date(Date.now()).toLocaleString()
			//   }
		  // ]
	  }
  },
	computed: {
		notesFilter() {
			let array = this.notes;
			let search = this.search;
			
			if(!search) return array;
			
			search = search.trim().toLowerCase();
			
			array = array.filter(item =>  {
				if(item.title.toLowerCase().indexOf(search) !== -1) {
					return item;
				}
			})
			return array;
		}
		
	},
	created() {
		this.notes = this.$store.getters.getNotes;
	},
	methods: {
		addNote(note, priority) {
				console.log(note);
				let { title, descr } = note;
				if (title === '') {
					this.message = 'Error - note is empty =(';
					return false;
				}
				this.notes.push({
					id:new Date(Date.now()),
					priority,
					title,
					descr,
					date: new Date(Date.now()).toLocaleString(),
				});
			note.title = '';
			note.descr = '';
			this.message = null;
		},
		removeNote(id){
			this.notes = this.notes.filter(i => i.id !== id);
		}
	}
}
</script>

<style>
.icons {
	cursor: pointer;
}
</style>
