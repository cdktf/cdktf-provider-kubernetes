# `kubernetes_cluster_role_v1`

Refer to the Terraform Registory for docs: [`kubernetes_cluster_role_v1`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1).

# `clusterRoleV1` Submodule <a name="`clusterRoleV1` Submodule" id="@cdktf/provider-kubernetes.clusterRoleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClusterRoleV1 <a name="ClusterRoleV1" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1 kubernetes_cluster_role_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: ClusterRoleV1Metadata,
  aggregation_rule: ClusterRoleV1AggregationRule = None,
  id: str = None,
  rule: typing.Union[IResolvable, typing.List[ClusterRoleV1Rule]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata">ClusterRoleV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.aggregationRule">aggregation_rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRule">ClusterRoleV1AggregationRule</a></code> | aggregation_rule block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#id ClusterRoleV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule">ClusterRoleV1Rule</a>]]</code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata">ClusterRoleV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#metadata ClusterRoleV1#metadata}

---

##### `aggregation_rule`<sup>Optional</sup> <a name="aggregation_rule" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.aggregationRule"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRule">ClusterRoleV1AggregationRule</a>

aggregation_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#aggregation_rule ClusterRoleV1#aggregation_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#id ClusterRoleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule">ClusterRoleV1Rule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#rule ClusterRoleV1#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.putAggregationRule">put_aggregation_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.resetAggregationRule">reset_aggregation_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.resetRule">reset_rule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_aggregation_rule` <a name="put_aggregation_rule" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.putAggregationRule"></a>

```python
def put_aggregation_rule(
  cluster_role_selectors: typing.Union[IResolvable, typing.List[ClusterRoleV1AggregationRuleClusterRoleSelectors]] = None
) -> None
```

###### `cluster_role_selectors`<sup>Optional</sup> <a name="cluster_role_selectors" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.putAggregationRule.parameter.clusterRoleSelectors"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors">ClusterRoleV1AggregationRuleClusterRoleSelectors</a>]]

cluster_role_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#cluster_role_selectors ClusterRoleV1#cluster_role_selectors}

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the clusterRole that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#annotations ClusterRoleV1#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#generate_name ClusterRoleV1#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRole.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#labels ClusterRoleV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the clusterRole, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#name ClusterRoleV1#name}

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[ClusterRoleV1Rule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule">ClusterRoleV1Rule</a>]]

---

##### `reset_aggregation_rule` <a name="reset_aggregation_rule" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.resetAggregationRule"></a>

```python
def reset_aggregation_rule() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.resetRule"></a>

```python
def reset_rule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ClusterRoleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.isConstruct"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ClusterRoleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ClusterRoleV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ClusterRoleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ClusterRoleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.aggregationRule">aggregation_rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference">ClusterRoleV1AggregationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference">ClusterRoleV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList">ClusterRoleV1RuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.aggregationRuleInput">aggregation_rule_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRule">ClusterRoleV1AggregationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata">ClusterRoleV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule">ClusterRoleV1Rule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aggregation_rule`<sup>Required</sup> <a name="aggregation_rule" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.aggregationRule"></a>

```python
aggregation_rule: ClusterRoleV1AggregationRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference">ClusterRoleV1AggregationRuleOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.metadata"></a>

```python
metadata: ClusterRoleV1MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference">ClusterRoleV1MetadataOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.rule"></a>

```python
rule: ClusterRoleV1RuleList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList">ClusterRoleV1RuleList</a>

---

##### `aggregation_rule_input`<sup>Optional</sup> <a name="aggregation_rule_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.aggregationRuleInput"></a>

```python
aggregation_rule_input: ClusterRoleV1AggregationRule
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRule">ClusterRoleV1AggregationRule</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.metadataInput"></a>

```python
metadata_input: ClusterRoleV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata">ClusterRoleV1Metadata</a>

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[ClusterRoleV1Rule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule">ClusterRoleV1Rule</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ClusterRoleV1AggregationRule <a name="ClusterRoleV1AggregationRule" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRule.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1AggregationRule(
  cluster_role_selectors: typing.Union[IResolvable, typing.List[ClusterRoleV1AggregationRuleClusterRoleSelectors]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRule.property.clusterRoleSelectors">cluster_role_selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors">ClusterRoleV1AggregationRuleClusterRoleSelectors</a>]]</code> | cluster_role_selectors block. |

---

##### `cluster_role_selectors`<sup>Optional</sup> <a name="cluster_role_selectors" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRule.property.clusterRoleSelectors"></a>

```python
cluster_role_selectors: typing.Union[IResolvable, typing.List[ClusterRoleV1AggregationRuleClusterRoleSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors">ClusterRoleV1AggregationRuleClusterRoleSelectors</a>]]

cluster_role_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#cluster_role_selectors ClusterRoleV1#cluster_role_selectors}

---

### ClusterRoleV1AggregationRuleClusterRoleSelectors <a name="ClusterRoleV1AggregationRuleClusterRoleSelectors" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors(
  match_expressions: typing.Union[IResolvable, typing.List[ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions]] = None,
  match_labels: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors.property.matchExpressions">match_expressions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions</a>]]</code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | A map of {key,value} pairs. |

---

##### `match_expressions`<sup>Optional</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors.property.matchExpressions"></a>

```python
match_expressions: typing.Union[IResolvable, typing.List[ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions</a>]]

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#match_expressions ClusterRoleV1#match_expressions}

---

##### `match_labels`<sup>Optional</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#match_labels ClusterRoleV1#match_labels}

---

### ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions <a name="ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions(
  key: str = None,
  operator: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions.property.key">key</a></code> | <code>str</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions.property.operator">operator</a></code> | <code>str</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions.property.values">values</a></code> | <code>typing.List[str]</code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions.property.key"></a>

```python
key: str
```

- *Type:* str

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#key ClusterRoleV1#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions.property.operator"></a>

```python
operator: str
```

- *Type:* str

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#operator ClusterRoleV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#values ClusterRoleV1#values}

---

### ClusterRoleV1Config <a name="ClusterRoleV1Config" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  metadata: ClusterRoleV1Metadata,
  aggregation_rule: ClusterRoleV1AggregationRule = None,
  id: str = None,
  rule: typing.Union[IResolvable, typing.List[ClusterRoleV1Rule]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata">ClusterRoleV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.aggregationRule">aggregation_rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRule">ClusterRoleV1AggregationRule</a></code> | aggregation_rule block. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#id ClusterRoleV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule">ClusterRoleV1Rule</a>]]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.metadata"></a>

```python
metadata: ClusterRoleV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata">ClusterRoleV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#metadata ClusterRoleV1#metadata}

---

##### `aggregation_rule`<sup>Optional</sup> <a name="aggregation_rule" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.aggregationRule"></a>

```python
aggregation_rule: ClusterRoleV1AggregationRule
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRule">ClusterRoleV1AggregationRule</a>

aggregation_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#aggregation_rule ClusterRoleV1#aggregation_rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#id ClusterRoleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Config.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[ClusterRoleV1Rule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule">ClusterRoleV1Rule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#rule ClusterRoleV1#rule}

---

### ClusterRoleV1Metadata <a name="ClusterRoleV1Metadata" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1Metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the clusterRole that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRole. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the clusterRole, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the clusterRole that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#annotations ClusterRoleV1#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#generate_name ClusterRoleV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRole.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#labels ClusterRoleV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the clusterRole, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#name ClusterRoleV1#name}

---

### ClusterRoleV1Rule <a name="ClusterRoleV1Rule" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1Rule(
  verbs: typing.List[str],
  api_groups: typing.List[str] = None,
  non_resource_urls: typing.List[str] = None,
  resource_names: typing.List[str] = None,
  resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule.property.verbs">verbs</a></code> | <code>typing.List[str]</code> | Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule.property.apiGroups">api_groups</a></code> | <code>typing.List[str]</code> | APIGroups is the name of the APIGroup that contains the resources. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule.property.nonResourceUrls">non_resource_urls</a></code> | <code>typing.List[str]</code> | NonResourceURLs is a set of partial urls that a user should have access to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule.property.resourceNames">resource_names</a></code> | <code>typing.List[str]</code> | ResourceNames is an optional white list of names that the rule applies to. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule.property.resources">resources</a></code> | <code>typing.List[str]</code> | Resources is a list of resources this rule applies to. ResourceAll represents all resources. |

---

##### `verbs`<sup>Required</sup> <a name="verbs" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule.property.verbs"></a>

```python
verbs: typing.List[str]
```

- *Type:* typing.List[str]

Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.

VerbAll represents all kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#verbs ClusterRoleV1#verbs}

---

##### `api_groups`<sup>Optional</sup> <a name="api_groups" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule.property.apiGroups"></a>

```python
api_groups: typing.List[str]
```

- *Type:* typing.List[str]

APIGroups is the name of the APIGroup that contains the resources.

If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#api_groups ClusterRoleV1#api_groups}

---

##### `non_resource_urls`<sup>Optional</sup> <a name="non_resource_urls" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule.property.nonResourceUrls"></a>

```python
non_resource_urls: typing.List[str]
```

- *Type:* typing.List[str]

NonResourceURLs is a set of partial urls that a user should have access to.

*s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"), but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#non_resource_urls ClusterRoleV1#non_resource_urls}

---

##### `resource_names`<sup>Optional</sup> <a name="resource_names" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule.property.resourceNames"></a>

```python
resource_names: typing.List[str]
```

- *Type:* typing.List[str]

ResourceNames is an optional white list of names that the rule applies to.

An empty set means that everything is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#resource_names ClusterRoleV1#resource_names}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

Resources is a list of resources this rule applies to. ResourceAll represents all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.24.0/docs/resources/cluster_role_v1#resources ClusterRoleV1#resources}

---

## Classes <a name="Classes" id="Classes"></a>

### ClusterRoleV1AggregationRuleClusterRoleSelectorsList <a name="ClusterRoleV1AggregationRuleClusterRoleSelectorsList" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors">ClusterRoleV1AggregationRuleClusterRoleSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClusterRoleV1AggregationRuleClusterRoleSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors">ClusterRoleV1AggregationRuleClusterRoleSelectors</a>]]

---


### ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList <a name="ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions</a>]]

---


### ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference <a name="ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetOperator">reset_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_operator` <a name="reset_operator" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetOperator"></a>

```python
def reset_operator() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions</a>]

---


### ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference <a name="ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.putMatchExpressions">put_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.resetMatchExpressions">reset_match_expressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.resetMatchLabels">reset_match_labels</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match_expressions` <a name="put_match_expressions" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.putMatchExpressions"></a>

```python
def put_match_expressions(
  value: typing.Union[IResolvable, typing.List[ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions</a>]]

---

##### `reset_match_expressions` <a name="reset_match_expressions" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.resetMatchExpressions"></a>

```python
def reset_match_expressions() -> None
```

##### `reset_match_labels` <a name="reset_match_labels" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.resetMatchLabels"></a>

```python
def reset_match_labels() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.matchExpressions">match_expressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList">ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.matchExpressionsInput">match_expressions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.matchLabelsInput">match_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.matchLabels">match_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors">ClusterRoleV1AggregationRuleClusterRoleSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match_expressions`<sup>Required</sup> <a name="match_expressions" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.matchExpressions"></a>

```python
match_expressions: ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList">ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressionsList</a>

---

##### `match_expressions_input`<sup>Optional</sup> <a name="match_expressions_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.matchExpressionsInput"></a>

```python
match_expressions_input: typing.Union[IResolvable, typing.List[ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions">ClusterRoleV1AggregationRuleClusterRoleSelectorsMatchExpressions</a>]]

---

##### `match_labels_input`<sup>Optional</sup> <a name="match_labels_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.matchLabelsInput"></a>

```python
match_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `match_labels`<sup>Required</sup> <a name="match_labels" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.matchLabels"></a>

```python
match_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClusterRoleV1AggregationRuleClusterRoleSelectors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors">ClusterRoleV1AggregationRuleClusterRoleSelectors</a>]

---


### ClusterRoleV1AggregationRuleOutputReference <a name="ClusterRoleV1AggregationRuleOutputReference" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.putClusterRoleSelectors">put_cluster_role_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.resetClusterRoleSelectors">reset_cluster_role_selectors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cluster_role_selectors` <a name="put_cluster_role_selectors" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.putClusterRoleSelectors"></a>

```python
def put_cluster_role_selectors(
  value: typing.Union[IResolvable, typing.List[ClusterRoleV1AggregationRuleClusterRoleSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.putClusterRoleSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors">ClusterRoleV1AggregationRuleClusterRoleSelectors</a>]]

---

##### `reset_cluster_role_selectors` <a name="reset_cluster_role_selectors" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.resetClusterRoleSelectors"></a>

```python
def reset_cluster_role_selectors() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.property.clusterRoleSelectors">cluster_role_selectors</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList">ClusterRoleV1AggregationRuleClusterRoleSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.property.clusterRoleSelectorsInput">cluster_role_selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors">ClusterRoleV1AggregationRuleClusterRoleSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRule">ClusterRoleV1AggregationRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_role_selectors`<sup>Required</sup> <a name="cluster_role_selectors" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.property.clusterRoleSelectors"></a>

```python
cluster_role_selectors: ClusterRoleV1AggregationRuleClusterRoleSelectorsList
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectorsList">ClusterRoleV1AggregationRuleClusterRoleSelectorsList</a>

---

##### `cluster_role_selectors_input`<sup>Optional</sup> <a name="cluster_role_selectors_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.property.clusterRoleSelectorsInput"></a>

```python
cluster_role_selectors_input: typing.Union[IResolvable, typing.List[ClusterRoleV1AggregationRuleClusterRoleSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleClusterRoleSelectors">ClusterRoleV1AggregationRuleClusterRoleSelectors</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRuleOutputReference.property.internalValue"></a>

```python
internal_value: ClusterRoleV1AggregationRule
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1AggregationRule">ClusterRoleV1AggregationRule</a>

---


### ClusterRoleV1MetadataOutputReference <a name="ClusterRoleV1MetadataOutputReference" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata">ClusterRoleV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: ClusterRoleV1Metadata
```

- *Type:* <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Metadata">ClusterRoleV1Metadata</a>

---


### ClusterRoleV1RuleList <a name="ClusterRoleV1RuleList" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1RuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ClusterRoleV1RuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule">ClusterRoleV1Rule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ClusterRoleV1Rule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule">ClusterRoleV1Rule</a>]]

---


### ClusterRoleV1RuleOutputReference <a name="ClusterRoleV1RuleOutputReference" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_kubernetes import cluster_role_v1

clusterRoleV1.ClusterRoleV1RuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.resetApiGroups">reset_api_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.resetNonResourceUrls">reset_non_resource_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.resetResourceNames">reset_resource_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_groups` <a name="reset_api_groups" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.resetApiGroups"></a>

```python
def reset_api_groups() -> None
```

##### `reset_non_resource_urls` <a name="reset_non_resource_urls" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.resetNonResourceUrls"></a>

```python
def reset_non_resource_urls() -> None
```

##### `reset_resource_names` <a name="reset_resource_names" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.resetResourceNames"></a>

```python
def reset_resource_names() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.apiGroupsInput">api_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.nonResourceUrlsInput">non_resource_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.resourceNamesInput">resource_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.verbsInput">verbs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.apiGroups">api_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.nonResourceUrls">non_resource_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.resourceNames">resource_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.verbs">verbs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule">ClusterRoleV1Rule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_groups_input`<sup>Optional</sup> <a name="api_groups_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.apiGroupsInput"></a>

```python
api_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `non_resource_urls_input`<sup>Optional</sup> <a name="non_resource_urls_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.nonResourceUrlsInput"></a>

```python
non_resource_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_names_input`<sup>Optional</sup> <a name="resource_names_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.resourceNamesInput"></a>

```python
resource_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verbs_input`<sup>Optional</sup> <a name="verbs_input" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.verbsInput"></a>

```python
verbs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `api_groups`<sup>Required</sup> <a name="api_groups" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.apiGroups"></a>

```python
api_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `non_resource_urls`<sup>Required</sup> <a name="non_resource_urls" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.nonResourceUrls"></a>

```python
non_resource_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_names`<sup>Required</sup> <a name="resource_names" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.resourceNames"></a>

```python
resource_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verbs`<sup>Required</sup> <a name="verbs" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.verbs"></a>

```python
verbs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1RuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ClusterRoleV1Rule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-kubernetes.clusterRoleV1.ClusterRoleV1Rule">ClusterRoleV1Rule</a>]

---



