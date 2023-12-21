<template>
  <q-layout view="hhh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white" >
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Qalendar
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/quotidien" label="Quotidien" icon="sym_o_event_available" />
        <q-route-tab to="/hebdomadaire" label=" Hebdomadaire"  icon="sym_o_date_range" />
        <q-route-tab to="/statistiques" label="statistiques"  icon="sym_o_monitoring" />
        <q-route-tab to="/configuration" label="Configuration"  icon="sym_o_settings" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
