// https://www.terraform.io/docs/providers/kubernetes/r/data_kubernetes_pod.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataKubernetesPodConfig extends TerraformMetaArguments {
  /** metadata block */
  readonly metadata: DataKubernetesPodMetadata[];
}
export class DataKubernetesPodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: true
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference extends ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: true
  public get matchExpressions() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution extends ComplexComputedList {

  // preference - computed: true, optional: false, required: true
  public get preference() {
    return 'not implemented' as any;
  }

  // weight - computed: true, optional: false, required: true
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export class DataKubernetesPodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: true
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm extends ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: true
  public get matchExpressions() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution extends ComplexComputedList {

  // node_selector_term - computed: true, optional: false, required: true
  public get nodeSelectorTerm() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecAffinityNodeAffinity extends ComplexComputedList {

  // preferred_during_scheduling_ignored_during_execution - computed: true, optional: false, required: true
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return 'not implemented' as any;
  }

  // required_during_scheduling_ignored_during_execution - computed: true, optional: false, required: true
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: true
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector extends ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: true
  public get matchExpressions() {
    return 'not implemented' as any;
  }

  // match_labels - computed: true, optional: false, required: true
  public get matchLabels() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm extends ComplexComputedList {

  // label_selector - computed: true, optional: false, required: true
  public get labelSelector() {
    return 'not implemented' as any;
  }

  // namespaces - computed: true, optional: false, required: true
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // topology_key - computed: true, optional: false, required: true
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution extends ComplexComputedList {

  // pod_affinity_term - computed: true, optional: false, required: true
  public get podAffinityTerm() {
    return 'not implemented' as any;
  }

  // weight - computed: true, optional: false, required: true
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: true
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector extends ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: true
  public get matchExpressions() {
    return 'not implemented' as any;
  }

  // match_labels - computed: true, optional: false, required: true
  public get matchLabels() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution extends ComplexComputedList {

  // label_selector - computed: true, optional: false, required: true
  public get labelSelector() {
    return 'not implemented' as any;
  }

  // namespaces - computed: true, optional: false, required: true
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // topology_key - computed: true, optional: false, required: true
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
}
export class DataKubernetesPodSpecAffinityPodAffinity extends ComplexComputedList {

  // preferred_during_scheduling_ignored_during_execution - computed: true, optional: false, required: true
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return 'not implemented' as any;
  }

  // required_during_scheduling_ignored_during_execution - computed: true, optional: false, required: true
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: true
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector extends ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: true
  public get matchExpressions() {
    return 'not implemented' as any;
  }

  // match_labels - computed: true, optional: false, required: true
  public get matchLabels() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm extends ComplexComputedList {

  // label_selector - computed: true, optional: false, required: true
  public get labelSelector() {
    return 'not implemented' as any;
  }

  // namespaces - computed: true, optional: false, required: true
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // topology_key - computed: true, optional: false, required: true
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution extends ComplexComputedList {

  // pod_affinity_term - computed: true, optional: false, required: true
  public get podAffinityTerm() {
    return 'not implemented' as any;
  }

  // weight - computed: true, optional: false, required: true
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: true
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: true
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector extends ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: true
  public get matchExpressions() {
    return 'not implemented' as any;
  }

  // match_labels - computed: true, optional: false, required: true
  public get matchLabels() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution extends ComplexComputedList {

  // label_selector - computed: true, optional: false, required: true
  public get labelSelector() {
    return 'not implemented' as any;
  }

  // namespaces - computed: true, optional: false, required: true
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // topology_key - computed: true, optional: false, required: true
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinity extends ComplexComputedList {

  // preferred_during_scheduling_ignored_during_execution - computed: true, optional: false, required: true
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return 'not implemented' as any;
  }

  // required_during_scheduling_ignored_during_execution - computed: true, optional: false, required: true
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecAffinity extends ComplexComputedList {

  // node_affinity - computed: true, optional: false, required: true
  public get nodeAffinity() {
    return 'not implemented' as any;
  }

  // pod_affinity - computed: true, optional: false, required: true
  public get podAffinity() {
    return 'not implemented' as any;
  }

  // pod_anti_affinity - computed: true, optional: false, required: true
  public get podAntiAffinity() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecContainerEnvValueFromConfigMapKeyRef extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecContainerEnvValueFromFieldRef extends ComplexComputedList {

  // api_version - computed: true, optional: false, required: true
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: true
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}
export class DataKubernetesPodSpecContainerEnvValueFromResourceFieldRef extends ComplexComputedList {

  // container_name - computed: true, optional: false, required: true
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // resource - computed: true, optional: false, required: true
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataKubernetesPodSpecContainerEnvValueFromSecretKeyRef extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecContainerEnvValueFrom extends ComplexComputedList {

  // config_map_key_ref - computed: true, optional: false, required: true
  public get configMapKeyRef() {
    return 'not implemented' as any;
  }

  // field_ref - computed: true, optional: false, required: true
  public get fieldRef() {
    return 'not implemented' as any;
  }

  // resource_field_ref - computed: true, optional: false, required: true
  public get resourceFieldRef() {
    return 'not implemented' as any;
  }

  // secret_key_ref - computed: true, optional: false, required: true
  public get secretKeyRef() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecContainerEnv extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_from - computed: true, optional: false, required: true
  public get valueFrom() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecContainerEnvFromConfigMapRef extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecContainerEnvFromSecretRef extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecContainerEnvFrom extends ComplexComputedList {

  // config_map_ref - computed: true, optional: false, required: true
  public get configMapRef() {
    return 'not implemented' as any;
  }

  // prefix - computed: true, optional: false, required: true
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // secret_ref - computed: true, optional: false, required: true
  public get secretRef() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecContainerLifecyclePostStartExec extends ComplexComputedList {

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePostStartHttpGetHttpHeader extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePostStartHttpGet extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: true
  public get httpHeader() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: true
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePostStartTcpSocket extends ComplexComputedList {

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePostStart extends ComplexComputedList {

  // exec - computed: true, optional: false, required: true
  public get exec() {
    return 'not implemented' as any;
  }

  // http_get - computed: true, optional: false, required: true
  public get httpGet() {
    return 'not implemented' as any;
  }

  // tcp_socket - computed: true, optional: false, required: true
  public get tcpSocket() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecContainerLifecyclePreStopExec extends ComplexComputedList {

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePreStopHttpGetHttpHeader extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePreStopHttpGet extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: true
  public get httpHeader() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: true
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePreStopTcpSocket extends ComplexComputedList {

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePreStop extends ComplexComputedList {

  // exec - computed: true, optional: false, required: true
  public get exec() {
    return 'not implemented' as any;
  }

  // http_get - computed: true, optional: false, required: true
  public get httpGet() {
    return 'not implemented' as any;
  }

  // tcp_socket - computed: true, optional: false, required: true
  public get tcpSocket() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecContainerLifecycle extends ComplexComputedList {

  // post_start - computed: true, optional: false, required: true
  public get postStart() {
    return 'not implemented' as any;
  }

  // pre_stop - computed: true, optional: false, required: true
  public get preStop() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecContainerLivenessProbeExec extends ComplexComputedList {

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecContainerLivenessProbeHttpGetHttpHeader extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecContainerLivenessProbeHttpGet extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: true
  public get httpHeader() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: true
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecContainerLivenessProbeTcpSocket extends ComplexComputedList {

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecContainerLivenessProbe extends ComplexComputedList {

  // exec - computed: true, optional: false, required: true
  public get exec() {
    return 'not implemented' as any;
  }

  // failure_threshold - computed: true, optional: false, required: true
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: true
  public get httpGet() {
    return 'not implemented' as any;
  }

  // initial_delay_seconds - computed: true, optional: false, required: true
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: true
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: true
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: true
  public get tcpSocket() {
    return 'not implemented' as any;
  }

  // timeout_seconds - computed: true, optional: false, required: true
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodSpecContainerPort extends ComplexComputedList {

  // container_port - computed: true, optional: false, required: true
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // host_ip - computed: true, optional: false, required: true
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }

  // host_port - computed: true, optional: false, required: true
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export class DataKubernetesPodSpecContainerReadinessProbeExec extends ComplexComputedList {

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecContainerReadinessProbeHttpGetHttpHeader extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecContainerReadinessProbeHttpGet extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: true
  public get httpHeader() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: true
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecContainerReadinessProbeTcpSocket extends ComplexComputedList {

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecContainerReadinessProbe extends ComplexComputedList {

  // exec - computed: true, optional: false, required: true
  public get exec() {
    return 'not implemented' as any;
  }

  // failure_threshold - computed: true, optional: false, required: true
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: true
  public get httpGet() {
    return 'not implemented' as any;
  }

  // initial_delay_seconds - computed: true, optional: false, required: true
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: true
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: true
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: true
  public get tcpSocket() {
    return 'not implemented' as any;
  }

  // timeout_seconds - computed: true, optional: false, required: true
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodSpecContainerResourcesLimits extends ComplexComputedList {

  // cpu - computed: true, optional: false, required: true
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // memory - computed: true, optional: false, required: true
  public get memory() {
    return this.getStringAttribute('memory');
  }
}
export class DataKubernetesPodSpecContainerResourcesRequests extends ComplexComputedList {

  // cpu - computed: true, optional: false, required: true
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // memory - computed: true, optional: false, required: true
  public get memory() {
    return this.getStringAttribute('memory');
  }
}
export class DataKubernetesPodSpecContainerResources extends ComplexComputedList {

  // limits - computed: true, optional: false, required: true
  public get limits() {
    return 'not implemented' as any;
  }

  // requests - computed: true, optional: false, required: true
  public get requests() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecContainerSecurityContextCapabilities extends ComplexComputedList {

  // add - computed: true, optional: false, required: true
  public get add() {
    return this.getListAttribute('add');
  }

  // drop - computed: true, optional: false, required: true
  public get drop() {
    return this.getListAttribute('drop');
  }
}
export class DataKubernetesPodSpecContainerSecurityContextSeLinuxOptions extends ComplexComputedList {

  // level - computed: true, optional: false, required: true
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: true
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: true
  public get user() {
    return this.getStringAttribute('user');
  }
}
export class DataKubernetesPodSpecContainerSecurityContext extends ComplexComputedList {

  // allow_privilege_escalation - computed: true, optional: false, required: true
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // capabilities - computed: true, optional: false, required: true
  public get capabilities() {
    return 'not implemented' as any;
  }

  // privileged - computed: true, optional: false, required: true
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: true
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: true
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: true
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: true
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: true
  public get seLinuxOptions() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecContainerStartupProbeExec extends ComplexComputedList {

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecContainerStartupProbeHttpGetHttpHeader extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecContainerStartupProbeHttpGet extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: true
  public get httpHeader() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: true
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecContainerStartupProbeTcpSocket extends ComplexComputedList {

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecContainerStartupProbe extends ComplexComputedList {

  // exec - computed: true, optional: false, required: true
  public get exec() {
    return 'not implemented' as any;
  }

  // failure_threshold - computed: true, optional: false, required: true
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: true
  public get httpGet() {
    return 'not implemented' as any;
  }

  // initial_delay_seconds - computed: true, optional: false, required: true
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: true
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: true
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: true
  public get tcpSocket() {
    return 'not implemented' as any;
  }

  // timeout_seconds - computed: true, optional: false, required: true
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodSpecContainerVolumeMount extends ComplexComputedList {

  // mount_path - computed: true, optional: false, required: true
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // mount_propagation - computed: true, optional: false, required: true
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: true
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}
export class DataKubernetesPodSpecContainer extends ComplexComputedList {

  // args - computed: true, optional: false, required: true
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: true
  public get env() {
    return 'not implemented' as any;
  }

  // env_from - computed: true, optional: false, required: true
  public get envFrom() {
    return 'not implemented' as any;
  }

  // image - computed: true, optional: false, required: true
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: true
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // lifecycle - computed: true, optional: false, required: true
  public get lifecycle() {
    return 'not implemented' as any;
  }

  // liveness_probe - computed: true, optional: false, required: true
  public get livenessProbe() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return 'not implemented' as any;
  }

  // readiness_probe - computed: true, optional: false, required: true
  public get readinessProbe() {
    return 'not implemented' as any;
  }

  // resources - computed: true, optional: false, required: true
  public get resources() {
    return 'not implemented' as any;
  }

  // security_context - computed: true, optional: false, required: true
  public get securityContext() {
    return 'not implemented' as any;
  }

  // startup_probe - computed: true, optional: false, required: true
  public get startupProbe() {
    return 'not implemented' as any;
  }

  // stdin - computed: true, optional: false, required: true
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }

  // stdin_once - computed: true, optional: false, required: true
  public get stdinOnce() {
    return this.getBooleanAttribute('stdin_once');
  }

  // termination_message_path - computed: true, optional: false, required: true
  public get terminationMessagePath() {
    return this.getStringAttribute('termination_message_path');
  }

  // termination_message_policy - computed: true, optional: false, required: true
  public get terminationMessagePolicy() {
    return this.getStringAttribute('termination_message_policy');
  }

  // tty - computed: true, optional: false, required: true
  public get tty() {
    return this.getBooleanAttribute('tty');
  }

  // volume_mount - computed: true, optional: false, required: true
  public get volumeMount() {
    return 'not implemented' as any;
  }

  // working_dir - computed: true, optional: false, required: true
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
}
export class DataKubernetesPodSpecDnsConfigOption extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecDnsConfig extends ComplexComputedList {

  // nameservers - computed: true, optional: false, required: true
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }

  // option - computed: true, optional: false, required: true
  public get option() {
    return 'not implemented' as any;
  }

  // searches - computed: true, optional: false, required: true
  public get searches() {
    return this.getListAttribute('searches');
  }
}
export class DataKubernetesPodSpecHostAliases extends ComplexComputedList {

  // hostnames - computed: true, optional: false, required: true
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // ip - computed: true, optional: false, required: true
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export class DataKubernetesPodSpecImagePullSecrets extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataKubernetesPodSpecInitContainerEnvValueFromConfigMapKeyRef extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecInitContainerEnvValueFromFieldRef extends ComplexComputedList {

  // api_version - computed: true, optional: false, required: true
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: true
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}
export class DataKubernetesPodSpecInitContainerEnvValueFromResourceFieldRef extends ComplexComputedList {

  // container_name - computed: true, optional: false, required: true
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // resource - computed: true, optional: false, required: true
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataKubernetesPodSpecInitContainerEnvValueFromSecretKeyRef extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecInitContainerEnvValueFrom extends ComplexComputedList {

  // config_map_key_ref - computed: true, optional: false, required: true
  public get configMapKeyRef() {
    return 'not implemented' as any;
  }

  // field_ref - computed: true, optional: false, required: true
  public get fieldRef() {
    return 'not implemented' as any;
  }

  // resource_field_ref - computed: true, optional: false, required: true
  public get resourceFieldRef() {
    return 'not implemented' as any;
  }

  // secret_key_ref - computed: true, optional: false, required: true
  public get secretKeyRef() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecInitContainerEnv extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_from - computed: true, optional: false, required: true
  public get valueFrom() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecInitContainerEnvFromConfigMapRef extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecInitContainerEnvFromSecretRef extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecInitContainerEnvFrom extends ComplexComputedList {

  // config_map_ref - computed: true, optional: false, required: true
  public get configMapRef() {
    return 'not implemented' as any;
  }

  // prefix - computed: true, optional: false, required: true
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // secret_ref - computed: true, optional: false, required: true
  public get secretRef() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePostStartExec extends ComplexComputedList {

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePostStartHttpGetHttpHeader extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePostStartHttpGet extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: true
  public get httpHeader() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: true
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePostStartTcpSocket extends ComplexComputedList {

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePostStart extends ComplexComputedList {

  // exec - computed: true, optional: false, required: true
  public get exec() {
    return 'not implemented' as any;
  }

  // http_get - computed: true, optional: false, required: true
  public get httpGet() {
    return 'not implemented' as any;
  }

  // tcp_socket - computed: true, optional: false, required: true
  public get tcpSocket() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePreStopExec extends ComplexComputedList {

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePreStopHttpGetHttpHeader extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePreStopHttpGet extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: true
  public get httpHeader() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: true
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePreStopTcpSocket extends ComplexComputedList {

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePreStop extends ComplexComputedList {

  // exec - computed: true, optional: false, required: true
  public get exec() {
    return 'not implemented' as any;
  }

  // http_get - computed: true, optional: false, required: true
  public get httpGet() {
    return 'not implemented' as any;
  }

  // tcp_socket - computed: true, optional: false, required: true
  public get tcpSocket() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecInitContainerLifecycle extends ComplexComputedList {

  // post_start - computed: true, optional: false, required: true
  public get postStart() {
    return 'not implemented' as any;
  }

  // pre_stop - computed: true, optional: false, required: true
  public get preStop() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecInitContainerLivenessProbeExec extends ComplexComputedList {

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecInitContainerLivenessProbeHttpGetHttpHeader extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecInitContainerLivenessProbeHttpGet extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: true
  public get httpHeader() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: true
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecInitContainerLivenessProbeTcpSocket extends ComplexComputedList {

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecInitContainerLivenessProbe extends ComplexComputedList {

  // exec - computed: true, optional: false, required: true
  public get exec() {
    return 'not implemented' as any;
  }

  // failure_threshold - computed: true, optional: false, required: true
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: true
  public get httpGet() {
    return 'not implemented' as any;
  }

  // initial_delay_seconds - computed: true, optional: false, required: true
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: true
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: true
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: true
  public get tcpSocket() {
    return 'not implemented' as any;
  }

  // timeout_seconds - computed: true, optional: false, required: true
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodSpecInitContainerPort extends ComplexComputedList {

  // container_port - computed: true, optional: false, required: true
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // host_ip - computed: true, optional: false, required: true
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }

  // host_port - computed: true, optional: false, required: true
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export class DataKubernetesPodSpecInitContainerReadinessProbeExec extends ComplexComputedList {

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecInitContainerReadinessProbeHttpGetHttpHeader extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecInitContainerReadinessProbeHttpGet extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: true
  public get httpHeader() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: true
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecInitContainerReadinessProbeTcpSocket extends ComplexComputedList {

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecInitContainerReadinessProbe extends ComplexComputedList {

  // exec - computed: true, optional: false, required: true
  public get exec() {
    return 'not implemented' as any;
  }

  // failure_threshold - computed: true, optional: false, required: true
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: true
  public get httpGet() {
    return 'not implemented' as any;
  }

  // initial_delay_seconds - computed: true, optional: false, required: true
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: true
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: true
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: true
  public get tcpSocket() {
    return 'not implemented' as any;
  }

  // timeout_seconds - computed: true, optional: false, required: true
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodSpecInitContainerResourcesLimits extends ComplexComputedList {

  // cpu - computed: true, optional: false, required: true
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // memory - computed: true, optional: false, required: true
  public get memory() {
    return this.getStringAttribute('memory');
  }
}
export class DataKubernetesPodSpecInitContainerResourcesRequests extends ComplexComputedList {

  // cpu - computed: true, optional: false, required: true
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // memory - computed: true, optional: false, required: true
  public get memory() {
    return this.getStringAttribute('memory');
  }
}
export class DataKubernetesPodSpecInitContainerResources extends ComplexComputedList {

  // limits - computed: true, optional: false, required: true
  public get limits() {
    return 'not implemented' as any;
  }

  // requests - computed: true, optional: false, required: true
  public get requests() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecInitContainerSecurityContextCapabilities extends ComplexComputedList {

  // add - computed: true, optional: false, required: true
  public get add() {
    return this.getListAttribute('add');
  }

  // drop - computed: true, optional: false, required: true
  public get drop() {
    return this.getListAttribute('drop');
  }
}
export class DataKubernetesPodSpecInitContainerSecurityContextSeLinuxOptions extends ComplexComputedList {

  // level - computed: true, optional: false, required: true
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: true
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: true
  public get user() {
    return this.getStringAttribute('user');
  }
}
export class DataKubernetesPodSpecInitContainerSecurityContext extends ComplexComputedList {

  // allow_privilege_escalation - computed: true, optional: false, required: true
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // capabilities - computed: true, optional: false, required: true
  public get capabilities() {
    return 'not implemented' as any;
  }

  // privileged - computed: true, optional: false, required: true
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: true
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: true
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: true
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: true
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: true
  public get seLinuxOptions() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecInitContainerStartupProbeExec extends ComplexComputedList {

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecInitContainerStartupProbeHttpGetHttpHeader extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecInitContainerStartupProbeHttpGet extends ComplexComputedList {

  // host - computed: true, optional: false, required: true
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: true
  public get httpHeader() {
    return 'not implemented' as any;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: true
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecInitContainerStartupProbeTcpSocket extends ComplexComputedList {

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecInitContainerStartupProbe extends ComplexComputedList {

  // exec - computed: true, optional: false, required: true
  public get exec() {
    return 'not implemented' as any;
  }

  // failure_threshold - computed: true, optional: false, required: true
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: true
  public get httpGet() {
    return 'not implemented' as any;
  }

  // initial_delay_seconds - computed: true, optional: false, required: true
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: true
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: true
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: true
  public get tcpSocket() {
    return 'not implemented' as any;
  }

  // timeout_seconds - computed: true, optional: false, required: true
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodSpecInitContainerVolumeMount extends ComplexComputedList {

  // mount_path - computed: true, optional: false, required: true
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // mount_propagation - computed: true, optional: false, required: true
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: true
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}
export class DataKubernetesPodSpecInitContainer extends ComplexComputedList {

  // args - computed: true, optional: false, required: true
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: true
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: true
  public get env() {
    return 'not implemented' as any;
  }

  // env_from - computed: true, optional: false, required: true
  public get envFrom() {
    return 'not implemented' as any;
  }

  // image - computed: true, optional: false, required: true
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: true
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // lifecycle - computed: true, optional: false, required: true
  public get lifecycle() {
    return 'not implemented' as any;
  }

  // liveness_probe - computed: true, optional: false, required: true
  public get livenessProbe() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return 'not implemented' as any;
  }

  // readiness_probe - computed: true, optional: false, required: true
  public get readinessProbe() {
    return 'not implemented' as any;
  }

  // resources - computed: true, optional: false, required: true
  public get resources() {
    return 'not implemented' as any;
  }

  // security_context - computed: true, optional: false, required: true
  public get securityContext() {
    return 'not implemented' as any;
  }

  // startup_probe - computed: true, optional: false, required: true
  public get startupProbe() {
    return 'not implemented' as any;
  }

  // stdin - computed: true, optional: false, required: true
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }

  // stdin_once - computed: true, optional: false, required: true
  public get stdinOnce() {
    return this.getBooleanAttribute('stdin_once');
  }

  // termination_message_path - computed: true, optional: false, required: true
  public get terminationMessagePath() {
    return this.getStringAttribute('termination_message_path');
  }

  // termination_message_policy - computed: true, optional: false, required: true
  public get terminationMessagePolicy() {
    return this.getStringAttribute('termination_message_policy');
  }

  // tty - computed: true, optional: false, required: true
  public get tty() {
    return this.getBooleanAttribute('tty');
  }

  // volume_mount - computed: true, optional: false, required: true
  public get volumeMount() {
    return 'not implemented' as any;
  }

  // working_dir - computed: true, optional: false, required: true
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
}
export class DataKubernetesPodSpecReadinessGate extends ComplexComputedList {

  // condition_type - computed: true, optional: false, required: true
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
}
export class DataKubernetesPodSpecSecurityContextSeLinuxOptions extends ComplexComputedList {

  // level - computed: true, optional: false, required: true
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: true
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: true
  public get user() {
    return this.getStringAttribute('user');
  }
}
export class DataKubernetesPodSpecSecurityContextSysctl extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecSecurityContext extends ComplexComputedList {

  // fs_group - computed: true, optional: false, required: true
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }

  // run_as_group - computed: true, optional: false, required: true
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: true
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: true
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: true
  public get seLinuxOptions() {
    return 'not implemented' as any;
  }

  // supplemental_groups - computed: true, optional: false, required: true
  public get supplementalGroups() {
    return 'not implemented' as any;
  }

  // sysctl - computed: true, optional: false, required: true
  public get sysctl() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecToleration extends ComplexComputedList {

  // effect - computed: true, optional: false, required: true
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: true
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // toleration_seconds - computed: true, optional: false, required: true
  public get tolerationSeconds() {
    return this.getStringAttribute('toleration_seconds');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecVolumeAwsElasticBlockStore extends ComplexComputedList {

  // fs_type - computed: true, optional: false, required: true
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // partition - computed: true, optional: false, required: true
  public get partition() {
    return this.getNumberAttribute('partition');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_id - computed: true, optional: false, required: true
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}
export class DataKubernetesPodSpecVolumeAzureDisk extends ComplexComputedList {

  // caching_mode - computed: true, optional: false, required: true
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }

  // data_disk_uri - computed: true, optional: false, required: true
  public get dataDiskUri() {
    return this.getStringAttribute('data_disk_uri');
  }

  // disk_name - computed: true, optional: false, required: true
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }

  // fs_type - computed: true, optional: false, required: true
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // kind - computed: true, optional: false, required: true
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export class DataKubernetesPodSpecVolumeAzureFile extends ComplexComputedList {

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_name - computed: true, optional: false, required: true
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // share_name - computed: true, optional: false, required: true
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
}
export class DataKubernetesPodSpecVolumeCephFsSecretRef extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeCephFs extends ComplexComputedList {

  // monitors - computed: true, optional: false, required: true
  public get monitors() {
    return this.getListAttribute('monitors');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_file - computed: true, optional: false, required: true
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }

  // secret_ref - computed: true, optional: false, required: true
  public get secretRef() {
    return 'not implemented' as any;
  }

  // user - computed: true, optional: false, required: true
  public get user() {
    return this.getStringAttribute('user');
  }
}
export class DataKubernetesPodSpecVolumeCinder extends ComplexComputedList {

  // fs_type - computed: true, optional: false, required: true
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_id - computed: true, optional: false, required: true
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}
export class DataKubernetesPodSpecVolumeConfigMapItems extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: true
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodSpecVolumeConfigMap extends ComplexComputedList {

  // default_mode - computed: true, optional: false, required: true
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: true
  public get items() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecVolumeCsiControllerExpandSecretRef extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeCsiControllerPublishSecretRef extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeCsiNodePublishSecretRef extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeCsiNodeStageSecretRef extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeCsi extends ComplexComputedList {

  // controller_expand_secret_ref - computed: true, optional: false, required: true
  public get controllerExpandSecretRef() {
    return 'not implemented' as any;
  }

  // controller_publish_secret_ref - computed: true, optional: false, required: true
  public get controllerPublishSecretRef() {
    return 'not implemented' as any;
  }

  // driver - computed: true, optional: false, required: true
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // fs_type - computed: true, optional: false, required: true
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // node_publish_secret_ref - computed: true, optional: false, required: true
  public get nodePublishSecretRef() {
    return 'not implemented' as any;
  }

  // node_stage_secret_ref - computed: true, optional: false, required: true
  public get nodeStageSecretRef() {
    return 'not implemented' as any;
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_attributes - computed: true, optional: false, required: true
  public get volumeAttributes() {
    return 'not implemented' as any;
  }

  // volume_handle - computed: true, optional: false, required: true
  public get volumeHandle() {
    return this.getStringAttribute('volume_handle');
  }
}
export class DataKubernetesPodSpecVolumeDownwardApiItemsFieldRef extends ComplexComputedList {

  // api_version - computed: true, optional: false, required: true
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: true
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}
export class DataKubernetesPodSpecVolumeDownwardApiItemsResourceFieldRef extends ComplexComputedList {

  // container_name - computed: true, optional: false, required: true
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // quantity - computed: true, optional: false, required: true
  public get quantity() {
    return this.getStringAttribute('quantity');
  }

  // resource - computed: true, optional: false, required: true
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataKubernetesPodSpecVolumeDownwardApiItems extends ComplexComputedList {

  // field_ref - computed: true, optional: false, required: true
  public get fieldRef() {
    return 'not implemented' as any;
  }

  // mode - computed: true, optional: false, required: true
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_field_ref - computed: true, optional: false, required: true
  public get resourceFieldRef() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecVolumeDownwardApi extends ComplexComputedList {

  // default_mode - computed: true, optional: false, required: true
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: true
  public get items() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecVolumeEmptyDir extends ComplexComputedList {

  // medium - computed: true, optional: false, required: true
  public get medium() {
    return this.getStringAttribute('medium');
  }

  // size_limit - computed: true, optional: false, required: true
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
}
export class DataKubernetesPodSpecVolumeFc extends ComplexComputedList {

  // fs_type - computed: true, optional: false, required: true
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // lun - computed: true, optional: false, required: true
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // target_ww_ns - computed: true, optional: false, required: true
  public get targetWwNs() {
    return this.getListAttribute('target_ww_ns');
  }
}
export class DataKubernetesPodSpecVolumeFlexVolumeSecretRef extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeFlexVolume extends ComplexComputedList {

  // driver - computed: true, optional: false, required: true
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // fs_type - computed: true, optional: false, required: true
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // options - computed: true, optional: false, required: true
  public get options() {
    return 'not implemented' as any;
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_ref - computed: true, optional: false, required: true
  public get secretRef() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecVolumeFlocker extends ComplexComputedList {

  // dataset_name - computed: true, optional: false, required: true
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }

  // dataset_uuid - computed: true, optional: false, required: true
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
}
export class DataKubernetesPodSpecVolumeGcePersistentDisk extends ComplexComputedList {

  // fs_type - computed: true, optional: false, required: true
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // partition - computed: true, optional: false, required: true
  public get partition() {
    return this.getNumberAttribute('partition');
  }

  // pd_name - computed: true, optional: false, required: true
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export class DataKubernetesPodSpecVolumeGitRepo extends ComplexComputedList {

  // directory - computed: true, optional: false, required: true
  public get directory() {
    return this.getStringAttribute('directory');
  }

  // repository - computed: true, optional: false, required: true
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // revision - computed: true, optional: false, required: true
  public get revision() {
    return this.getStringAttribute('revision');
  }
}
export class DataKubernetesPodSpecVolumeGlusterfs extends ComplexComputedList {

  // endpoints_name - computed: true, optional: false, required: true
  public get endpointsName() {
    return this.getStringAttribute('endpoints_name');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export class DataKubernetesPodSpecVolumeHostPath extends ComplexComputedList {

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataKubernetesPodSpecVolumeIscsi extends ComplexComputedList {

  // fs_type - computed: true, optional: false, required: true
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // iqn - computed: true, optional: false, required: true
  public get iqn() {
    return this.getStringAttribute('iqn');
  }

  // iscsi_interface - computed: true, optional: false, required: true
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }

  // lun - computed: true, optional: false, required: true
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // target_portal - computed: true, optional: false, required: true
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
}
export class DataKubernetesPodSpecVolumeLocal extends ComplexComputedList {

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodSpecVolumeNfs extends ComplexComputedList {

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // server - computed: true, optional: false, required: true
  public get server() {
    return this.getStringAttribute('server');
  }
}
export class DataKubernetesPodSpecVolumePersistentVolumeClaim extends ComplexComputedList {

  // claim_name - computed: true, optional: false, required: true
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export class DataKubernetesPodSpecVolumePhotonPersistentDisk extends ComplexComputedList {

  // fs_type - computed: true, optional: false, required: true
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // pd_id - computed: true, optional: false, required: true
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesConfigMapItems extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: true
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesConfigMap extends ComplexComputedList {

  // items - computed: true, optional: false, required: true
  public get items() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsFieldRef extends ComplexComputedList {

  // api_version - computed: true, optional: false, required: true
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: true
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef extends ComplexComputedList {

  // container_name - computed: true, optional: false, required: true
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // quantity - computed: true, optional: false, required: true
  public get quantity() {
    return this.getStringAttribute('quantity');
  }

  // resource - computed: true, optional: false, required: true
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItems extends ComplexComputedList {

  // field_ref - computed: true, optional: false, required: true
  public get fieldRef() {
    return 'not implemented' as any;
  }

  // mode - computed: true, optional: false, required: true
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_field_ref - computed: true, optional: false, required: true
  public get resourceFieldRef() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApi extends ComplexComputedList {

  // items - computed: true, optional: false, required: true
  public get items() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesSecretItems extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: true
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesSecret extends ComplexComputedList {

  // items - computed: true, optional: false, required: true
  public get items() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesServiceAccountToken extends ComplexComputedList {

  // audience - computed: true, optional: false, required: true
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // expiration_seconds - computed: true, optional: false, required: true
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSources extends ComplexComputedList {

  // config_map - computed: true, optional: false, required: true
  public get configMap() {
    return 'not implemented' as any;
  }

  // downward_api - computed: true, optional: false, required: true
  public get downwardApi() {
    return 'not implemented' as any;
  }

  // secret - computed: true, optional: false, required: true
  public get secret() {
    return 'not implemented' as any;
  }

  // service_account_token - computed: true, optional: false, required: true
  public get serviceAccountToken() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecVolumeProjected extends ComplexComputedList {

  // default_mode - computed: true, optional: false, required: true
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // sources - computed: true, optional: false, required: true
  public get sources() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecVolumeQuobyte extends ComplexComputedList {

  // group - computed: true, optional: false, required: true
  public get group() {
    return this.getStringAttribute('group');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // registry - computed: true, optional: false, required: true
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // user - computed: true, optional: false, required: true
  public get user() {
    return this.getStringAttribute('user');
  }

  // volume - computed: true, optional: false, required: true
  public get volume() {
    return this.getStringAttribute('volume');
  }
}
export class DataKubernetesPodSpecVolumeRbdSecretRef extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: true
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeRbd extends ComplexComputedList {

  // ceph_monitors - computed: true, optional: false, required: true
  public get cephMonitors() {
    return this.getListAttribute('ceph_monitors');
  }

  // fs_type - computed: true, optional: false, required: true
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // keyring - computed: true, optional: false, required: true
  public get keyring() {
    return this.getStringAttribute('keyring');
  }

  // rados_user - computed: true, optional: false, required: true
  public get radosUser() {
    return this.getStringAttribute('rados_user');
  }

  // rbd_image - computed: true, optional: false, required: true
  public get rbdImage() {
    return this.getStringAttribute('rbd_image');
  }

  // rbd_pool - computed: true, optional: false, required: true
  public get rbdPool() {
    return this.getStringAttribute('rbd_pool');
  }

  // read_only - computed: true, optional: false, required: true
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_ref - computed: true, optional: false, required: true
  public get secretRef() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpecVolumeSecretItems extends ComplexComputedList {

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: true
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodSpecVolumeSecret extends ComplexComputedList {

  // default_mode - computed: true, optional: false, required: true
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: true
  public get items() {
    return 'not implemented' as any;
  }

  // optional - computed: true, optional: false, required: true
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // secret_name - computed: true, optional: false, required: true
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}
export class DataKubernetesPodSpecVolumeVsphereVolume extends ComplexComputedList {

  // fs_type - computed: true, optional: false, required: true
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // volume_path - computed: true, optional: false, required: true
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
}
export class DataKubernetesPodSpecVolume extends ComplexComputedList {

  // aws_elastic_block_store - computed: true, optional: false, required: true
  public get awsElasticBlockStore() {
    return 'not implemented' as any;
  }

  // azure_disk - computed: true, optional: false, required: true
  public get azureDisk() {
    return 'not implemented' as any;
  }

  // azure_file - computed: true, optional: false, required: true
  public get azureFile() {
    return 'not implemented' as any;
  }

  // ceph_fs - computed: true, optional: false, required: true
  public get cephFs() {
    return 'not implemented' as any;
  }

  // cinder - computed: true, optional: false, required: true
  public get cinder() {
    return 'not implemented' as any;
  }

  // config_map - computed: true, optional: false, required: true
  public get configMap() {
    return 'not implemented' as any;
  }

  // csi - computed: true, optional: false, required: true
  public get csi() {
    return 'not implemented' as any;
  }

  // downward_api - computed: true, optional: false, required: true
  public get downwardApi() {
    return 'not implemented' as any;
  }

  // empty_dir - computed: true, optional: false, required: true
  public get emptyDir() {
    return 'not implemented' as any;
  }

  // fc - computed: true, optional: false, required: true
  public get fc() {
    return 'not implemented' as any;
  }

  // flex_volume - computed: true, optional: false, required: true
  public get flexVolume() {
    return 'not implemented' as any;
  }

  // flocker - computed: true, optional: false, required: true
  public get flocker() {
    return 'not implemented' as any;
  }

  // gce_persistent_disk - computed: true, optional: false, required: true
  public get gcePersistentDisk() {
    return 'not implemented' as any;
  }

  // git_repo - computed: true, optional: false, required: true
  public get gitRepo() {
    return 'not implemented' as any;
  }

  // glusterfs - computed: true, optional: false, required: true
  public get glusterfs() {
    return 'not implemented' as any;
  }

  // host_path - computed: true, optional: false, required: true
  public get hostPath() {
    return 'not implemented' as any;
  }

  // iscsi - computed: true, optional: false, required: true
  public get iscsi() {
    return 'not implemented' as any;
  }

  // local - computed: true, optional: false, required: true
  public get local() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // nfs - computed: true, optional: false, required: true
  public get nfs() {
    return 'not implemented' as any;
  }

  // persistent_volume_claim - computed: true, optional: false, required: true
  public get persistentVolumeClaim() {
    return 'not implemented' as any;
  }

  // photon_persistent_disk - computed: true, optional: false, required: true
  public get photonPersistentDisk() {
    return 'not implemented' as any;
  }

  // projected - computed: true, optional: false, required: true
  public get projected() {
    return 'not implemented' as any;
  }

  // quobyte - computed: true, optional: false, required: true
  public get quobyte() {
    return 'not implemented' as any;
  }

  // rbd - computed: true, optional: false, required: true
  public get rbd() {
    return 'not implemented' as any;
  }

  // secret - computed: true, optional: false, required: true
  public get secret() {
    return 'not implemented' as any;
  }

  // vsphere_volume - computed: true, optional: false, required: true
  public get vsphereVolume() {
    return 'not implemented' as any;
  }
}
export class DataKubernetesPodSpec extends ComplexComputedList {

  // active_deadline_seconds - computed: true, optional: false, required: true
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }

  // affinity - computed: true, optional: false, required: true
  public get affinity() {
    return 'not implemented' as any;
  }

  // automount_service_account_token - computed: true, optional: false, required: true
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }

  // container - computed: true, optional: false, required: true
  public get container() {
    return 'not implemented' as any;
  }

  // dns_config - computed: true, optional: false, required: true
  public get dnsConfig() {
    return 'not implemented' as any;
  }

  // dns_policy - computed: true, optional: false, required: true
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }

  // enable_service_links - computed: true, optional: false, required: true
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }

  // host_aliases - computed: true, optional: false, required: true
  public get hostAliases() {
    return 'not implemented' as any;
  }

  // host_ipc - computed: true, optional: false, required: true
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc');
  }

  // host_network - computed: true, optional: false, required: true
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }

  // host_pid - computed: true, optional: false, required: true
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // image_pull_secrets - computed: true, optional: false, required: true
  public get imagePullSecrets() {
    return 'not implemented' as any;
  }

  // init_container - computed: true, optional: false, required: true
  public get initContainer() {
    return 'not implemented' as any;
  }

  // node_name - computed: true, optional: false, required: true
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // node_selector - computed: true, optional: false, required: true
  public get nodeSelector() {
    return 'not implemented' as any;
  }

  // priority_class_name - computed: true, optional: false, required: true
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }

  // readiness_gate - computed: true, optional: false, required: true
  public get readinessGate() {
    return 'not implemented' as any;
  }

  // restart_policy - computed: true, optional: false, required: true
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }

  // security_context - computed: true, optional: false, required: true
  public get securityContext() {
    return 'not implemented' as any;
  }

  // service_account_name - computed: true, optional: false, required: true
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // share_process_namespace - computed: true, optional: false, required: true
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }

  // subdomain - computed: true, optional: false, required: true
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // termination_grace_period_seconds - computed: true, optional: false, required: true
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }

  // toleration - computed: true, optional: false, required: true
  public get toleration() {
    return 'not implemented' as any;
  }

  // volume - computed: true, optional: false, required: true
  public get volume() {
    return 'not implemented' as any;
  }
}
export interface DataKubernetesPodMetadata {
  /** An unstructured key value map stored with the pod that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency */
  readonly generateName?: string;
  /** Map of string keys and values that can be used to organize and categorize (scope and select) the pod. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** Name of the pod, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names */
  readonly name?: string;
  /** Namespace defines the space within which name of the pod must be unique. */
  readonly namespace?: string;
}

// Resource

export class DataKubernetesPod extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataKubernetesPodConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_pod',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // spec - computed: true, optional: false, required: true
  public spec(index: string) {
    return new DataKubernetesPodSpec(this, 'spec', index);
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DataKubernetesPodMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: DataKubernetesPodMetadata[]) {
    this._metadata = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: this._metadata,
    };
  }
}
