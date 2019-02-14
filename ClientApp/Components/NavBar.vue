<template>
    <v-toolbar app color="#b71c1c">
        <v-toolbar-side-icon><v-icon color="#fff">menu</v-icon></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items hidden-sm-and-down>
            <v-btn flat :to="'/servers'">Server List</v-btn>
            <v-btn flat :to="'/servers/34'">Server Show</v-btn>
            <v-btn flat :to="'/servers/new'">New Server</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
