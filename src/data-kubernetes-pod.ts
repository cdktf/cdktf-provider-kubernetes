// https://www.terraform.io/docs/providers/kubernetes/d/pod.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesPodConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/pod.html#metadata DataKubernetesPod#metadata}
  */
  readonly metadata: DataKubernetesPodMetadata[];
}
export class DataKubernetesPodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    return this.interpolationForAttribute('match_expressions') as any;
  }
}
export class DataKubernetesPodSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution extends cdktf.ComplexComputedList {

  // preference - computed: true, optional: false, required: false
  public get preference() {
    return this.interpolationForAttribute('preference') as any;
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export class DataKubernetesPodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    return this.interpolationForAttribute('match_expressions') as any;
  }
}
export class DataKubernetesPodSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution extends cdktf.ComplexComputedList {

  // node_selector_term - computed: true, optional: false, required: false
  public get nodeSelectorTerm() {
    return this.interpolationForAttribute('node_selector_term') as any;
  }
}
export class DataKubernetesPodSpecAffinityNodeAffinity extends cdktf.ComplexComputedList {

  // preferred_during_scheduling_ignored_during_execution - computed: true, optional: false, required: false
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution') as any;
  }

  // required_during_scheduling_ignored_during_execution - computed: true, optional: false, required: false
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this.interpolationForAttribute('required_during_scheduling_ignored_during_execution') as any;
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    return this.interpolationForAttribute('match_expressions') as any;
  }

  // match_labels - computed: true, optional: false, required: false
  public get matchLabels() {
    return this.interpolationForAttribute('match_labels') as any;
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm extends cdktf.ComplexComputedList {

  // label_selector - computed: true, optional: false, required: false
  public get labelSelector() {
    return this.interpolationForAttribute('label_selector') as any;
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution extends cdktf.ComplexComputedList {

  // pod_affinity_term - computed: true, optional: false, required: false
  public get podAffinityTerm() {
    return this.interpolationForAttribute('pod_affinity_term') as any;
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    return this.interpolationForAttribute('match_expressions') as any;
  }

  // match_labels - computed: true, optional: false, required: false
  public get matchLabels() {
    return this.interpolationForAttribute('match_labels') as any;
  }
}
export class DataKubernetesPodSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution extends cdktf.ComplexComputedList {

  // label_selector - computed: true, optional: false, required: false
  public get labelSelector() {
    return this.interpolationForAttribute('label_selector') as any;
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
}
export class DataKubernetesPodSpecAffinityPodAffinity extends cdktf.ComplexComputedList {

  // preferred_during_scheduling_ignored_during_execution - computed: true, optional: false, required: false
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution') as any;
  }

  // required_during_scheduling_ignored_during_execution - computed: true, optional: false, required: false
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this.interpolationForAttribute('required_during_scheduling_ignored_during_execution') as any;
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    return this.interpolationForAttribute('match_expressions') as any;
  }

  // match_labels - computed: true, optional: false, required: false
  public get matchLabels() {
    return this.interpolationForAttribute('match_labels') as any;
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm extends cdktf.ComplexComputedList {

  // label_selector - computed: true, optional: false, required: false
  public get labelSelector() {
    return this.interpolationForAttribute('label_selector') as any;
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution extends cdktf.ComplexComputedList {

  // pod_affinity_term - computed: true, optional: false, required: false
  public get podAffinityTerm() {
    return this.interpolationForAttribute('pod_affinity_term') as any;
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    return this.interpolationForAttribute('match_expressions') as any;
  }

  // match_labels - computed: true, optional: false, required: false
  public get matchLabels() {
    return this.interpolationForAttribute('match_labels') as any;
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution extends cdktf.ComplexComputedList {

  // label_selector - computed: true, optional: false, required: false
  public get labelSelector() {
    return this.interpolationForAttribute('label_selector') as any;
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
}
export class DataKubernetesPodSpecAffinityPodAntiAffinity extends cdktf.ComplexComputedList {

  // preferred_during_scheduling_ignored_during_execution - computed: true, optional: false, required: false
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution') as any;
  }

  // required_during_scheduling_ignored_during_execution - computed: true, optional: false, required: false
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this.interpolationForAttribute('required_during_scheduling_ignored_during_execution') as any;
  }
}
export class DataKubernetesPodSpecAffinity extends cdktf.ComplexComputedList {

  // node_affinity - computed: true, optional: false, required: false
  public get nodeAffinity() {
    return this.interpolationForAttribute('node_affinity') as any;
  }

  // pod_affinity - computed: true, optional: false, required: false
  public get podAffinity() {
    return this.interpolationForAttribute('pod_affinity') as any;
  }

  // pod_anti_affinity - computed: true, optional: false, required: false
  public get podAntiAffinity() {
    return this.interpolationForAttribute('pod_anti_affinity') as any;
  }
}
export class DataKubernetesPodSpecContainerEnvValueFromConfigMapKeyRef extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecContainerEnvValueFromFieldRef extends cdktf.ComplexComputedList {

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}
export class DataKubernetesPodSpecContainerEnvValueFromResourceFieldRef extends cdktf.ComplexComputedList {

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataKubernetesPodSpecContainerEnvValueFromSecretKeyRef extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecContainerEnvValueFrom extends cdktf.ComplexComputedList {

  // config_map_key_ref - computed: true, optional: false, required: false
  public get configMapKeyRef() {
    return this.interpolationForAttribute('config_map_key_ref') as any;
  }

  // field_ref - computed: true, optional: false, required: false
  public get fieldRef() {
    return this.interpolationForAttribute('field_ref') as any;
  }

  // resource_field_ref - computed: true, optional: false, required: false
  public get resourceFieldRef() {
    return this.interpolationForAttribute('resource_field_ref') as any;
  }

  // secret_key_ref - computed: true, optional: false, required: false
  public get secretKeyRef() {
    return this.interpolationForAttribute('secret_key_ref') as any;
  }
}
export class DataKubernetesPodSpecContainerEnv extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.interpolationForAttribute('value_from') as any;
  }
}
export class DataKubernetesPodSpecContainerEnvFromConfigMapRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecContainerEnvFromSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecContainerEnvFrom extends cdktf.ComplexComputedList {

  // config_map_ref - computed: true, optional: false, required: false
  public get configMapRef() {
    return this.interpolationForAttribute('config_map_ref') as any;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    return this.interpolationForAttribute('secret_ref') as any;
  }
}
export class DataKubernetesPodSpecContainerLifecyclePostStartExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePostStartHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePostStartHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.interpolationForAttribute('http_header') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePostStartTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePostStart extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    return this.interpolationForAttribute('exec') as any;
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    return this.interpolationForAttribute('http_get') as any;
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    return this.interpolationForAttribute('tcp_socket') as any;
  }
}
export class DataKubernetesPodSpecContainerLifecyclePreStopExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePreStopHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePreStopHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.interpolationForAttribute('http_header') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePreStopTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecContainerLifecyclePreStop extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    return this.interpolationForAttribute('exec') as any;
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    return this.interpolationForAttribute('http_get') as any;
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    return this.interpolationForAttribute('tcp_socket') as any;
  }
}
export class DataKubernetesPodSpecContainerLifecycle extends cdktf.ComplexComputedList {

  // post_start - computed: true, optional: false, required: false
  public get postStart() {
    return this.interpolationForAttribute('post_start') as any;
  }

  // pre_stop - computed: true, optional: false, required: false
  public get preStop() {
    return this.interpolationForAttribute('pre_stop') as any;
  }
}
export class DataKubernetesPodSpecContainerLivenessProbeExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecContainerLivenessProbeHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecContainerLivenessProbeHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.interpolationForAttribute('http_header') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecContainerLivenessProbeTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecContainerLivenessProbe extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    return this.interpolationForAttribute('exec') as any;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    return this.interpolationForAttribute('http_get') as any;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    return this.interpolationForAttribute('tcp_socket') as any;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodSpecContainerPort extends cdktf.ComplexComputedList {

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // host_ip - computed: true, optional: false, required: false
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export class DataKubernetesPodSpecContainerReadinessProbeExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecContainerReadinessProbeHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecContainerReadinessProbeHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.interpolationForAttribute('http_header') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecContainerReadinessProbeTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecContainerReadinessProbe extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    return this.interpolationForAttribute('exec') as any;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    return this.interpolationForAttribute('http_get') as any;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    return this.interpolationForAttribute('tcp_socket') as any;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodSpecContainerResources extends cdktf.ComplexComputedList {

  // limits - computed: true, optional: false, required: false
  public get limits() {
    return this.interpolationForAttribute('limits') as any;
  }

  // requests - computed: true, optional: false, required: false
  public get requests() {
    return this.interpolationForAttribute('requests') as any;
  }
}
export class DataKubernetesPodSpecContainerSecurityContextCapabilities extends cdktf.ComplexComputedList {

  // add - computed: true, optional: false, required: false
  public get add() {
    return this.getListAttribute('add');
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getListAttribute('drop');
  }
}
export class DataKubernetesPodSpecContainerSecurityContextSeLinuxOptions extends cdktf.ComplexComputedList {

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export class DataKubernetesPodSpecContainerSecurityContext extends cdktf.ComplexComputedList {

  // allow_privilege_escalation - computed: true, optional: false, required: false
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.interpolationForAttribute('capabilities') as any;
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: false
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: false
  public get seLinuxOptions() {
    return this.interpolationForAttribute('se_linux_options') as any;
  }
}
export class DataKubernetesPodSpecContainerStartupProbeExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecContainerStartupProbeHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecContainerStartupProbeHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.interpolationForAttribute('http_header') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecContainerStartupProbeTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecContainerStartupProbe extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    return this.interpolationForAttribute('exec') as any;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    return this.interpolationForAttribute('http_get') as any;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    return this.interpolationForAttribute('tcp_socket') as any;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodSpecContainerVolumeMount extends cdktf.ComplexComputedList {

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // mount_propagation - computed: true, optional: false, required: false
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: false
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}
export class DataKubernetesPodSpecContainer extends cdktf.ComplexComputedList {

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  public get env() {
    return this.interpolationForAttribute('env') as any;
  }

  // env_from - computed: true, optional: false, required: false
  public get envFrom() {
    return this.interpolationForAttribute('env_from') as any;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // lifecycle - computed: true, optional: false, required: false
  public get lifecycle() {
    return this.interpolationForAttribute('lifecycle') as any;
  }

  // liveness_probe - computed: true, optional: false, required: false
  public get livenessProbe() {
    return this.interpolationForAttribute('liveness_probe') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.interpolationForAttribute('port') as any;
  }

  // readiness_probe - computed: true, optional: false, required: false
  public get readinessProbe() {
    return this.interpolationForAttribute('readiness_probe') as any;
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.interpolationForAttribute('resources') as any;
  }

  // security_context - computed: true, optional: false, required: false
  public get securityContext() {
    return this.interpolationForAttribute('security_context') as any;
  }

  // startup_probe - computed: true, optional: false, required: false
  public get startupProbe() {
    return this.interpolationForAttribute('startup_probe') as any;
  }

  // stdin - computed: true, optional: false, required: false
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }

  // stdin_once - computed: true, optional: false, required: false
  public get stdinOnce() {
    return this.getBooleanAttribute('stdin_once');
  }

  // termination_message_path - computed: true, optional: false, required: false
  public get terminationMessagePath() {
    return this.getStringAttribute('termination_message_path');
  }

  // termination_message_policy - computed: true, optional: false, required: false
  public get terminationMessagePolicy() {
    return this.getStringAttribute('termination_message_policy');
  }

  // tty - computed: true, optional: false, required: false
  public get tty() {
    return this.getBooleanAttribute('tty');
  }

  // volume_mount - computed: true, optional: false, required: false
  public get volumeMount() {
    return this.interpolationForAttribute('volume_mount') as any;
  }

  // working_dir - computed: true, optional: false, required: false
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
}
export class DataKubernetesPodSpecDnsConfigOption extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecDnsConfig extends cdktf.ComplexComputedList {

  // nameservers - computed: true, optional: false, required: false
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }

  // option - computed: true, optional: false, required: false
  public get option() {
    return this.interpolationForAttribute('option') as any;
  }

  // searches - computed: true, optional: false, required: false
  public get searches() {
    return this.getListAttribute('searches');
  }
}
export class DataKubernetesPodSpecHostAliases extends cdktf.ComplexComputedList {

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export class DataKubernetesPodSpecImagePullSecrets extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataKubernetesPodSpecInitContainerEnvValueFromConfigMapKeyRef extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecInitContainerEnvValueFromFieldRef extends cdktf.ComplexComputedList {

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}
export class DataKubernetesPodSpecInitContainerEnvValueFromResourceFieldRef extends cdktf.ComplexComputedList {

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataKubernetesPodSpecInitContainerEnvValueFromSecretKeyRef extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecInitContainerEnvValueFrom extends cdktf.ComplexComputedList {

  // config_map_key_ref - computed: true, optional: false, required: false
  public get configMapKeyRef() {
    return this.interpolationForAttribute('config_map_key_ref') as any;
  }

  // field_ref - computed: true, optional: false, required: false
  public get fieldRef() {
    return this.interpolationForAttribute('field_ref') as any;
  }

  // resource_field_ref - computed: true, optional: false, required: false
  public get resourceFieldRef() {
    return this.interpolationForAttribute('resource_field_ref') as any;
  }

  // secret_key_ref - computed: true, optional: false, required: false
  public get secretKeyRef() {
    return this.interpolationForAttribute('secret_key_ref') as any;
  }
}
export class DataKubernetesPodSpecInitContainerEnv extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    return this.interpolationForAttribute('value_from') as any;
  }
}
export class DataKubernetesPodSpecInitContainerEnvFromConfigMapRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecInitContainerEnvFromSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecInitContainerEnvFrom extends cdktf.ComplexComputedList {

  // config_map_ref - computed: true, optional: false, required: false
  public get configMapRef() {
    return this.interpolationForAttribute('config_map_ref') as any;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    return this.interpolationForAttribute('secret_ref') as any;
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePostStartExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePostStartHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePostStartHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.interpolationForAttribute('http_header') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePostStartTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePostStart extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    return this.interpolationForAttribute('exec') as any;
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    return this.interpolationForAttribute('http_get') as any;
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    return this.interpolationForAttribute('tcp_socket') as any;
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePreStopExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePreStopHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePreStopHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.interpolationForAttribute('http_header') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePreStopTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecInitContainerLifecyclePreStop extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    return this.interpolationForAttribute('exec') as any;
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    return this.interpolationForAttribute('http_get') as any;
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    return this.interpolationForAttribute('tcp_socket') as any;
  }
}
export class DataKubernetesPodSpecInitContainerLifecycle extends cdktf.ComplexComputedList {

  // post_start - computed: true, optional: false, required: false
  public get postStart() {
    return this.interpolationForAttribute('post_start') as any;
  }

  // pre_stop - computed: true, optional: false, required: false
  public get preStop() {
    return this.interpolationForAttribute('pre_stop') as any;
  }
}
export class DataKubernetesPodSpecInitContainerLivenessProbeExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecInitContainerLivenessProbeHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecInitContainerLivenessProbeHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.interpolationForAttribute('http_header') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecInitContainerLivenessProbeTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecInitContainerLivenessProbe extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    return this.interpolationForAttribute('exec') as any;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    return this.interpolationForAttribute('http_get') as any;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    return this.interpolationForAttribute('tcp_socket') as any;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodSpecInitContainerPort extends cdktf.ComplexComputedList {

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // host_ip - computed: true, optional: false, required: false
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export class DataKubernetesPodSpecInitContainerReadinessProbeExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecInitContainerReadinessProbeHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecInitContainerReadinessProbeHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.interpolationForAttribute('http_header') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecInitContainerReadinessProbeTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecInitContainerReadinessProbe extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    return this.interpolationForAttribute('exec') as any;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    return this.interpolationForAttribute('http_get') as any;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    return this.interpolationForAttribute('tcp_socket') as any;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodSpecInitContainerResources extends cdktf.ComplexComputedList {

  // limits - computed: true, optional: false, required: false
  public get limits() {
    return this.interpolationForAttribute('limits') as any;
  }

  // requests - computed: true, optional: false, required: false
  public get requests() {
    return this.interpolationForAttribute('requests') as any;
  }
}
export class DataKubernetesPodSpecInitContainerSecurityContextCapabilities extends cdktf.ComplexComputedList {

  // add - computed: true, optional: false, required: false
  public get add() {
    return this.getListAttribute('add');
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getListAttribute('drop');
  }
}
export class DataKubernetesPodSpecInitContainerSecurityContextSeLinuxOptions extends cdktf.ComplexComputedList {

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export class DataKubernetesPodSpecInitContainerSecurityContext extends cdktf.ComplexComputedList {

  // allow_privilege_escalation - computed: true, optional: false, required: false
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    return this.interpolationForAttribute('capabilities') as any;
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: false
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: false
  public get seLinuxOptions() {
    return this.interpolationForAttribute('se_linux_options') as any;
  }
}
export class DataKubernetesPodSpecInitContainerStartupProbeExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodSpecInitContainerStartupProbeHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecInitContainerStartupProbeHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.interpolationForAttribute('http_header') as any;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodSpecInitContainerStartupProbeTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodSpecInitContainerStartupProbe extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    return this.interpolationForAttribute('exec') as any;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    return this.interpolationForAttribute('http_get') as any;
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    return this.interpolationForAttribute('tcp_socket') as any;
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodSpecInitContainerVolumeMount extends cdktf.ComplexComputedList {

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // mount_propagation - computed: true, optional: false, required: false
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: false
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}
export class DataKubernetesPodSpecInitContainer extends cdktf.ComplexComputedList {

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  public get env() {
    return this.interpolationForAttribute('env') as any;
  }

  // env_from - computed: true, optional: false, required: false
  public get envFrom() {
    return this.interpolationForAttribute('env_from') as any;
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // lifecycle - computed: true, optional: false, required: false
  public get lifecycle() {
    return this.interpolationForAttribute('lifecycle') as any;
  }

  // liveness_probe - computed: true, optional: false, required: false
  public get livenessProbe() {
    return this.interpolationForAttribute('liveness_probe') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.interpolationForAttribute('port') as any;
  }

  // readiness_probe - computed: true, optional: false, required: false
  public get readinessProbe() {
    return this.interpolationForAttribute('readiness_probe') as any;
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.interpolationForAttribute('resources') as any;
  }

  // security_context - computed: true, optional: false, required: false
  public get securityContext() {
    return this.interpolationForAttribute('security_context') as any;
  }

  // startup_probe - computed: true, optional: false, required: false
  public get startupProbe() {
    return this.interpolationForAttribute('startup_probe') as any;
  }

  // stdin - computed: true, optional: false, required: false
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }

  // stdin_once - computed: true, optional: false, required: false
  public get stdinOnce() {
    return this.getBooleanAttribute('stdin_once');
  }

  // termination_message_path - computed: true, optional: false, required: false
  public get terminationMessagePath() {
    return this.getStringAttribute('termination_message_path');
  }

  // termination_message_policy - computed: true, optional: false, required: false
  public get terminationMessagePolicy() {
    return this.getStringAttribute('termination_message_policy');
  }

  // tty - computed: true, optional: false, required: false
  public get tty() {
    return this.getBooleanAttribute('tty');
  }

  // volume_mount - computed: true, optional: false, required: false
  public get volumeMount() {
    return this.interpolationForAttribute('volume_mount') as any;
  }

  // working_dir - computed: true, optional: false, required: false
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
}
export class DataKubernetesPodSpecReadinessGate extends cdktf.ComplexComputedList {

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
}
export class DataKubernetesPodSpecSecurityContextSeLinuxOptions extends cdktf.ComplexComputedList {

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export class DataKubernetesPodSpecSecurityContextSysctl extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecSecurityContext extends cdktf.ComplexComputedList {

  // fs_group - computed: true, optional: false, required: false
  public get fsGroup() {
    return this.getStringAttribute('fs_group');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: false
  public get seLinuxOptions() {
    return this.interpolationForAttribute('se_linux_options') as any;
  }

  // supplemental_groups - computed: true, optional: false, required: false
  public get supplementalGroups() {
    return this.interpolationForAttribute('supplemental_groups') as any;
  }

  // sysctl - computed: true, optional: false, required: false
  public get sysctl() {
    return this.interpolationForAttribute('sysctl') as any;
  }
}
export class DataKubernetesPodSpecToleration extends cdktf.ComplexComputedList {

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // toleration_seconds - computed: true, optional: false, required: false
  public get tolerationSeconds() {
    return this.getStringAttribute('toleration_seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodSpecTopologySpreadConstraintLabelSelectorMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}
export class DataKubernetesPodSpecTopologySpreadConstraintLabelSelector extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    return this.interpolationForAttribute('match_expressions') as any;
  }

  // match_labels - computed: true, optional: false, required: false
  public get matchLabels() {
    return this.interpolationForAttribute('match_labels') as any;
  }
}
export class DataKubernetesPodSpecTopologySpreadConstraint extends cdktf.ComplexComputedList {

  // label_selector - computed: true, optional: false, required: false
  public get labelSelector() {
    return this.interpolationForAttribute('label_selector') as any;
  }

  // max_skew - computed: true, optional: false, required: false
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }

  // when_unsatisfiable - computed: true, optional: false, required: false
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
}
export class DataKubernetesPodSpecVolumeAwsElasticBlockStore extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getNumberAttribute('partition');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}
export class DataKubernetesPodSpecVolumeAzureDisk extends cdktf.ComplexComputedList {

  // caching_mode - computed: true, optional: false, required: false
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }

  // data_disk_uri - computed: true, optional: false, required: false
  public get dataDiskUri() {
    return this.getStringAttribute('data_disk_uri');
  }

  // disk_name - computed: true, optional: false, required: false
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export class DataKubernetesPodSpecVolumeAzureFile extends cdktf.ComplexComputedList {

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // secret_namespace - computed: true, optional: false, required: false
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }

  // share_name - computed: true, optional: false, required: false
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
}
export class DataKubernetesPodSpecVolumeCephFsSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeCephFs extends cdktf.ComplexComputedList {

  // monitors - computed: true, optional: false, required: false
  public get monitors() {
    return this.getListAttribute('monitors');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_file - computed: true, optional: false, required: false
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    return this.interpolationForAttribute('secret_ref') as any;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export class DataKubernetesPodSpecVolumeCinder extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}
export class DataKubernetesPodSpecVolumeConfigMapItems extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodSpecVolumeConfigMap extends cdktf.ComplexComputedList {

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.interpolationForAttribute('items') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecVolumeCsiControllerExpandSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeCsiControllerPublishSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeCsiNodePublishSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeCsiNodeStageSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeCsi extends cdktf.ComplexComputedList {

  // controller_expand_secret_ref - computed: true, optional: false, required: false
  public get controllerExpandSecretRef() {
    return this.interpolationForAttribute('controller_expand_secret_ref') as any;
  }

  // controller_publish_secret_ref - computed: true, optional: false, required: false
  public get controllerPublishSecretRef() {
    return this.interpolationForAttribute('controller_publish_secret_ref') as any;
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // node_publish_secret_ref - computed: true, optional: false, required: false
  public get nodePublishSecretRef() {
    return this.interpolationForAttribute('node_publish_secret_ref') as any;
  }

  // node_stage_secret_ref - computed: true, optional: false, required: false
  public get nodeStageSecretRef() {
    return this.interpolationForAttribute('node_stage_secret_ref') as any;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_attributes - computed: true, optional: false, required: false
  public get volumeAttributes() {
    return this.interpolationForAttribute('volume_attributes') as any;
  }

  // volume_handle - computed: true, optional: false, required: false
  public get volumeHandle() {
    return this.getStringAttribute('volume_handle');
  }
}
export class DataKubernetesPodSpecVolumeDownwardApiItemsFieldRef extends cdktf.ComplexComputedList {

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}
export class DataKubernetesPodSpecVolumeDownwardApiItemsResourceFieldRef extends cdktf.ComplexComputedList {

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataKubernetesPodSpecVolumeDownwardApiItems extends cdktf.ComplexComputedList {

  // field_ref - computed: true, optional: false, required: false
  public get fieldRef() {
    return this.interpolationForAttribute('field_ref') as any;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_field_ref - computed: true, optional: false, required: false
  public get resourceFieldRef() {
    return this.interpolationForAttribute('resource_field_ref') as any;
  }
}
export class DataKubernetesPodSpecVolumeDownwardApi extends cdktf.ComplexComputedList {

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.interpolationForAttribute('items') as any;
  }
}
export class DataKubernetesPodSpecVolumeEmptyDir extends cdktf.ComplexComputedList {

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }

  // size_limit - computed: true, optional: false, required: false
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
}
export class DataKubernetesPodSpecVolumeFc extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // target_ww_ns - computed: true, optional: false, required: false
  public get targetWwNs() {
    return this.getListAttribute('target_ww_ns');
  }
}
export class DataKubernetesPodSpecVolumeFlexVolumeSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeFlexVolume extends cdktf.ComplexComputedList {

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    return this.interpolationForAttribute('secret_ref') as any;
  }
}
export class DataKubernetesPodSpecVolumeFlocker extends cdktf.ComplexComputedList {

  // dataset_name - computed: true, optional: false, required: false
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }

  // dataset_uuid - computed: true, optional: false, required: false
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
}
export class DataKubernetesPodSpecVolumeGcePersistentDisk extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getNumberAttribute('partition');
  }

  // pd_name - computed: true, optional: false, required: false
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export class DataKubernetesPodSpecVolumeGitRepo extends cdktf.ComplexComputedList {

  // directory - computed: true, optional: false, required: false
  public get directory() {
    return this.getStringAttribute('directory');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }
}
export class DataKubernetesPodSpecVolumeGlusterfs extends cdktf.ComplexComputedList {

  // endpoints_name - computed: true, optional: false, required: false
  public get endpointsName() {
    return this.getStringAttribute('endpoints_name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export class DataKubernetesPodSpecVolumeHostPath extends cdktf.ComplexComputedList {

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataKubernetesPodSpecVolumeIscsi extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // iqn - computed: true, optional: false, required: false
  public get iqn() {
    return this.getStringAttribute('iqn');
  }

  // iscsi_interface - computed: true, optional: false, required: false
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // target_portal - computed: true, optional: false, required: false
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
}
export class DataKubernetesPodSpecVolumeLocal extends cdktf.ComplexComputedList {

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodSpecVolumeNfs extends cdktf.ComplexComputedList {

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}
export class DataKubernetesPodSpecVolumePersistentVolumeClaim extends cdktf.ComplexComputedList {

  // claim_name - computed: true, optional: false, required: false
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export class DataKubernetesPodSpecVolumePhotonPersistentDisk extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // pd_id - computed: true, optional: false, required: false
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesConfigMapItems extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesConfigMap extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.interpolationForAttribute('items') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsFieldRef extends cdktf.ComplexComputedList {

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef extends cdktf.ComplexComputedList {

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApiItems extends cdktf.ComplexComputedList {

  // field_ref - computed: true, optional: false, required: false
  public get fieldRef() {
    return this.interpolationForAttribute('field_ref') as any;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_field_ref - computed: true, optional: false, required: false
  public get resourceFieldRef() {
    return this.interpolationForAttribute('resource_field_ref') as any;
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesDownwardApi extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.interpolationForAttribute('items') as any;
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesSecretItems extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesSecret extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.interpolationForAttribute('items') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSourcesServiceAccountToken extends cdktf.ComplexComputedList {

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // expiration_seconds - computed: true, optional: false, required: false
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodSpecVolumeProjectedSources extends cdktf.ComplexComputedList {

  // config_map - computed: true, optional: false, required: false
  public get configMap() {
    return this.interpolationForAttribute('config_map') as any;
  }

  // downward_api - computed: true, optional: false, required: false
  public get downwardApi() {
    return this.interpolationForAttribute('downward_api') as any;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.interpolationForAttribute('secret') as any;
  }

  // service_account_token - computed: true, optional: false, required: false
  public get serviceAccountToken() {
    return this.interpolationForAttribute('service_account_token') as any;
  }
}
export class DataKubernetesPodSpecVolumeProjected extends cdktf.ComplexComputedList {

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // sources - computed: true, optional: false, required: false
  public get sources() {
    return this.interpolationForAttribute('sources') as any;
  }
}
export class DataKubernetesPodSpecVolumeQuobyte extends cdktf.ComplexComputedList {

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getStringAttribute('volume');
  }
}
export class DataKubernetesPodSpecVolumeRbdSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodSpecVolumeRbd extends cdktf.ComplexComputedList {

  // ceph_monitors - computed: true, optional: false, required: false
  public get cephMonitors() {
    return this.getListAttribute('ceph_monitors');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // keyring - computed: true, optional: false, required: false
  public get keyring() {
    return this.getStringAttribute('keyring');
  }

  // rados_user - computed: true, optional: false, required: false
  public get radosUser() {
    return this.getStringAttribute('rados_user');
  }

  // rbd_image - computed: true, optional: false, required: false
  public get rbdImage() {
    return this.getStringAttribute('rbd_image');
  }

  // rbd_pool - computed: true, optional: false, required: false
  public get rbdPool() {
    return this.getStringAttribute('rbd_pool');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    return this.interpolationForAttribute('secret_ref') as any;
  }
}
export class DataKubernetesPodSpecVolumeSecretItems extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodSpecVolumeSecret extends cdktf.ComplexComputedList {

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return this.interpolationForAttribute('items') as any;
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}
export class DataKubernetesPodSpecVolumeVsphereVolume extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // volume_path - computed: true, optional: false, required: false
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
}
export class DataKubernetesPodSpecVolume extends cdktf.ComplexComputedList {

  // aws_elastic_block_store - computed: true, optional: false, required: false
  public get awsElasticBlockStore() {
    return this.interpolationForAttribute('aws_elastic_block_store') as any;
  }

  // azure_disk - computed: true, optional: false, required: false
  public get azureDisk() {
    return this.interpolationForAttribute('azure_disk') as any;
  }

  // azure_file - computed: true, optional: false, required: false
  public get azureFile() {
    return this.interpolationForAttribute('azure_file') as any;
  }

  // ceph_fs - computed: true, optional: false, required: false
  public get cephFs() {
    return this.interpolationForAttribute('ceph_fs') as any;
  }

  // cinder - computed: true, optional: false, required: false
  public get cinder() {
    return this.interpolationForAttribute('cinder') as any;
  }

  // config_map - computed: true, optional: false, required: false
  public get configMap() {
    return this.interpolationForAttribute('config_map') as any;
  }

  // csi - computed: true, optional: false, required: false
  public get csi() {
    return this.interpolationForAttribute('csi') as any;
  }

  // downward_api - computed: true, optional: false, required: false
  public get downwardApi() {
    return this.interpolationForAttribute('downward_api') as any;
  }

  // empty_dir - computed: true, optional: false, required: false
  public get emptyDir() {
    return this.interpolationForAttribute('empty_dir') as any;
  }

  // fc - computed: true, optional: false, required: false
  public get fc() {
    return this.interpolationForAttribute('fc') as any;
  }

  // flex_volume - computed: true, optional: false, required: false
  public get flexVolume() {
    return this.interpolationForAttribute('flex_volume') as any;
  }

  // flocker - computed: true, optional: false, required: false
  public get flocker() {
    return this.interpolationForAttribute('flocker') as any;
  }

  // gce_persistent_disk - computed: true, optional: false, required: false
  public get gcePersistentDisk() {
    return this.interpolationForAttribute('gce_persistent_disk') as any;
  }

  // git_repo - computed: true, optional: false, required: false
  public get gitRepo() {
    return this.interpolationForAttribute('git_repo') as any;
  }

  // glusterfs - computed: true, optional: false, required: false
  public get glusterfs() {
    return this.interpolationForAttribute('glusterfs') as any;
  }

  // host_path - computed: true, optional: false, required: false
  public get hostPath() {
    return this.interpolationForAttribute('host_path') as any;
  }

  // iscsi - computed: true, optional: false, required: false
  public get iscsi() {
    return this.interpolationForAttribute('iscsi') as any;
  }

  // local - computed: true, optional: false, required: false
  public get local() {
    return this.interpolationForAttribute('local') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nfs - computed: true, optional: false, required: false
  public get nfs() {
    return this.interpolationForAttribute('nfs') as any;
  }

  // persistent_volume_claim - computed: true, optional: false, required: false
  public get persistentVolumeClaim() {
    return this.interpolationForAttribute('persistent_volume_claim') as any;
  }

  // photon_persistent_disk - computed: true, optional: false, required: false
  public get photonPersistentDisk() {
    return this.interpolationForAttribute('photon_persistent_disk') as any;
  }

  // projected - computed: true, optional: false, required: false
  public get projected() {
    return this.interpolationForAttribute('projected') as any;
  }

  // quobyte - computed: true, optional: false, required: false
  public get quobyte() {
    return this.interpolationForAttribute('quobyte') as any;
  }

  // rbd - computed: true, optional: false, required: false
  public get rbd() {
    return this.interpolationForAttribute('rbd') as any;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.interpolationForAttribute('secret') as any;
  }

  // vsphere_volume - computed: true, optional: false, required: false
  public get vsphereVolume() {
    return this.interpolationForAttribute('vsphere_volume') as any;
  }
}
export class DataKubernetesPodSpec extends cdktf.ComplexComputedList {

  // active_deadline_seconds - computed: true, optional: false, required: false
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }

  // affinity - computed: true, optional: false, required: false
  public get affinity() {
    return this.interpolationForAttribute('affinity') as any;
  }

  // automount_service_account_token - computed: true, optional: false, required: false
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.interpolationForAttribute('container') as any;
  }

  // dns_config - computed: true, optional: false, required: false
  public get dnsConfig() {
    return this.interpolationForAttribute('dns_config') as any;
  }

  // dns_policy - computed: true, optional: false, required: false
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }

  // enable_service_links - computed: true, optional: false, required: false
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }

  // host_aliases - computed: true, optional: false, required: false
  public get hostAliases() {
    return this.interpolationForAttribute('host_aliases') as any;
  }

  // host_ipc - computed: true, optional: false, required: false
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc');
  }

  // host_network - computed: true, optional: false, required: false
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }

  // host_pid - computed: true, optional: false, required: false
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // image_pull_secrets - computed: true, optional: false, required: false
  public get imagePullSecrets() {
    return this.interpolationForAttribute('image_pull_secrets') as any;
  }

  // init_container - computed: true, optional: false, required: false
  public get initContainer() {
    return this.interpolationForAttribute('init_container') as any;
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // node_selector - computed: true, optional: false, required: false
  public get nodeSelector() {
    return this.interpolationForAttribute('node_selector') as any;
  }

  // priority_class_name - computed: true, optional: false, required: false
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }

  // readiness_gate - computed: true, optional: false, required: false
  public get readinessGate() {
    return this.interpolationForAttribute('readiness_gate') as any;
  }

  // restart_policy - computed: true, optional: false, required: false
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }

  // security_context - computed: true, optional: false, required: false
  public get securityContext() {
    return this.interpolationForAttribute('security_context') as any;
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // share_process_namespace - computed: true, optional: false, required: false
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // termination_grace_period_seconds - computed: true, optional: false, required: false
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }

  // toleration - computed: true, optional: false, required: false
  public get toleration() {
    return this.interpolationForAttribute('toleration') as any;
  }

  // topology_spread_constraint - computed: true, optional: false, required: false
  public get topologySpreadConstraint() {
    return this.interpolationForAttribute('topology_spread_constraint') as any;
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.interpolationForAttribute('volume') as any;
  }
}
export interface DataKubernetesPodMetadata {
  /**
  * An unstructured key value map stored with the pod that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/pod.html#annotations DataKubernetesPod#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/pod.html#generate_name DataKubernetesPod#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the pod. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/pod.html#labels DataKubernetesPod#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the pod, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/pod.html#name DataKubernetesPod#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the pod must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/pod.html#namespace DataKubernetesPod#namespace}
  */
  readonly namespace?: string;
}

function dataKubernetesPodMetadataToTerraform(struct?: DataKubernetesPodMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/pod.html kubernetes_pod}
*/
export class DataKubernetesPod extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/d/pod.html kubernetes_pod} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubernetesPodConfig
  */
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // spec - computed: true, optional: false, required: false
  public spec(index: string) {
    return new DataKubernetesPodSpec(this, 'spec', index);
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: DataKubernetesPodMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: DataKubernetesPodMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.listMapper(dataKubernetesPodMetadataToTerraform)(this._metadata),
    };
  }
}
