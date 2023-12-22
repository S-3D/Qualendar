<template>
  <q-layout view="hhh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat no-caps no-wrap to="/index">

          <q-toolbar-title>
            <q-avatar>
              <img src="icon.png" alt="Q">
            </q-avatar>
            alendar

          </q-toolbar-title>

        </q-btn>

      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/quotidien" label="Quotidien" icon="sym_o_event_available" />
        <q-route-tab to="/mensuel" label=" Mensuel" icon="sym_o_date_range" />
        <q-route-tab to="/statistiques" label="statistiques" icon="sym_o_monitoring" />
        <q-route-tab to="/parametres" label="parametres" icon="sym_o_settings" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
