# `dataKubernetesNodes` Submodule <a name="`dataKubernetesNodes` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesNodes <a name="DataKubernetesNodes" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/nodes kubernetes_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodes(Construct Scope, string Id, DataKubernetesNodesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig">DataKubernetesNodesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig">DataKubernetesNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.putMetadata"></a>

```csharp
private void PutMetadata(DataKubernetesNodesMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadata">DataKubernetesNodesMetadata</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesNodes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesNodes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesNodes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesNodes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesNodes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataKubernetesNodes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesNodes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/nodes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference">DataKubernetesNodesMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.nodes">Nodes</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList">DataKubernetesNodesNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadata">DataKubernetesNodesMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.metadata"></a>

```csharp
public DataKubernetesNodesMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference">DataKubernetesNodesMetadataOutputReference</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.nodes"></a>

```csharp
public DataKubernetesNodesNodesList Nodes { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList">DataKubernetesNodesNodesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.metadataInput"></a>

```csharp
public DataKubernetesNodesMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadata">DataKubernetesNodesMetadata</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesNodesConfig <a name="DataKubernetesNodesConfig" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    DataKubernetesNodesMetadata Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/nodes#id DataKubernetesNodes#id}. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadata">DataKubernetesNodesMetadata</a></code> | metadata block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/nodes#id DataKubernetesNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesConfig.property.metadata"></a>

```csharp
public DataKubernetesNodesMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadata">DataKubernetesNodesMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/nodes#metadata DataKubernetesNodes#metadata}

---

### DataKubernetesNodesMetadata <a name="DataKubernetesNodesMetadata" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesMetadata {
    System.Collections.Generic.IDictionary<string, string> Labels
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Select nodes with these labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/. |

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Select nodes with these labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/nodes#labels DataKubernetesNodes#labels}

---

### DataKubernetesNodesNodes <a name="DataKubernetesNodesNodes" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodes {

};
```


### DataKubernetesNodesNodesMetadata <a name="DataKubernetesNodesNodesMetadata" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesMetadata {

};
```


### DataKubernetesNodesNodesSpec <a name="DataKubernetesNodesNodesSpec" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesSpec {

};
```


### DataKubernetesNodesNodesSpecTaints <a name="DataKubernetesNodesNodesSpecTaints" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesSpecTaints {

};
```


### DataKubernetesNodesNodesStatus <a name="DataKubernetesNodesNodesStatus" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesStatus {

};
```


### DataKubernetesNodesNodesStatusAddresses <a name="DataKubernetesNodesNodesStatusAddresses" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddresses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesStatusAddresses {

};
```


### DataKubernetesNodesNodesStatusConditions <a name="DataKubernetesNodesNodesStatusConditions" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesStatusConditions {

};
```


### DataKubernetesNodesNodesStatusNodeInfo <a name="DataKubernetesNodesNodesStatusNodeInfo" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesStatusNodeInfo {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesNodesMetadataOutputReference <a name="DataKubernetesNodesMetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadata">DataKubernetesNodesMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadataOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesNodesMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesMetadata">DataKubernetesNodesMetadata</a>

---


### DataKubernetesNodesNodesList <a name="DataKubernetesNodesNodesList" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.get"></a>

```csharp
private DataKubernetesNodesNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesNodesNodesMetadataList <a name="DataKubernetesNodesNodesMetadataList" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.get"></a>

```csharp
private DataKubernetesNodesNodesMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesNodesNodesMetadataOutputReference <a name="DataKubernetesNodesNodesMetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.annotations">Annotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadata">DataKubernetesNodesNodesMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.annotations"></a>

```csharp
public StringMap Annotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesNodesNodesMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadata">DataKubernetesNodesNodesMetadata</a>

---


### DataKubernetesNodesNodesOutputReference <a name="DataKubernetesNodesNodesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList">DataKubernetesNodesNodesMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList">DataKubernetesNodesNodesSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.property.status">Status</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList">DataKubernetesNodesNodesStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodes">DataKubernetesNodesNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.property.metadata"></a>

```csharp
public DataKubernetesNodesNodesMetadataList Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesMetadataList">DataKubernetesNodesNodesMetadataList</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.property.spec"></a>

```csharp
public DataKubernetesNodesNodesSpecList Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList">DataKubernetesNodesNodesSpecList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.property.status"></a>

```csharp
public DataKubernetesNodesNodesStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList">DataKubernetesNodesNodesStatusList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesNodesNodes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodes">DataKubernetesNodesNodes</a>

---


### DataKubernetesNodesNodesSpecList <a name="DataKubernetesNodesNodesSpecList" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.get"></a>

```csharp
private DataKubernetesNodesNodesSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesNodesNodesSpecOutputReference <a name="DataKubernetesNodesNodesSpecOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.podCidr">PodCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.podCidrs">PodCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.providerId">ProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList">DataKubernetesNodesNodesSpecTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.unschedulable">Unschedulable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpec">DataKubernetesNodesNodesSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PodCidr`<sup>Required</sup> <a name="PodCidr" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.podCidr"></a>

```csharp
public string PodCidr { get; }
```

- *Type:* string

---

##### `PodCidrs`<sup>Required</sup> <a name="PodCidrs" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.podCidrs"></a>

```csharp
public string[] PodCidrs { get; }
```

- *Type:* string[]

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.providerId"></a>

```csharp
public string ProviderId { get; }
```

- *Type:* string

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.taints"></a>

```csharp
public DataKubernetesNodesNodesSpecTaintsList Taints { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList">DataKubernetesNodesNodesSpecTaintsList</a>

---

##### `Unschedulable`<sup>Required</sup> <a name="Unschedulable" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.unschedulable"></a>

```csharp
public IResolvable Unschedulable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesNodesNodesSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpec">DataKubernetesNodesNodesSpec</a>

---


### DataKubernetesNodesNodesSpecTaintsList <a name="DataKubernetesNodesNodesSpecTaintsList" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesSpecTaintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.get"></a>

```csharp
private DataKubernetesNodesNodesSpecTaintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesNodesNodesSpecTaintsOutputReference <a name="DataKubernetesNodesNodesSpecTaintsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesSpecTaintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaints">DataKubernetesNodesNodesSpecTaints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaintsOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesNodesNodesSpecTaints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesSpecTaints">DataKubernetesNodesNodesSpecTaints</a>

---


### DataKubernetesNodesNodesStatusAddressesList <a name="DataKubernetesNodesNodesStatusAddressesList" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesStatusAddressesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.get"></a>

```csharp
private DataKubernetesNodesNodesStatusAddressesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesNodesNodesStatusAddressesOutputReference <a name="DataKubernetesNodesNodesStatusAddressesOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesStatusAddressesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddresses">DataKubernetesNodesNodesStatusAddresses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesNodesNodesStatusAddresses InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddresses">DataKubernetesNodesNodesStatusAddresses</a>

---


### DataKubernetesNodesNodesStatusConditionsList <a name="DataKubernetesNodesNodesStatusConditionsList" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesStatusConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.get"></a>

```csharp
private DataKubernetesNodesNodesStatusConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesNodesNodesStatusConditionsOutputReference <a name="DataKubernetesNodesNodesStatusConditionsOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesStatusConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.lastHeartbeatTime">LastHeartbeatTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditions">DataKubernetesNodesNodesStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastHeartbeatTime`<sup>Required</sup> <a name="LastHeartbeatTime" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.lastHeartbeatTime"></a>

```csharp
public string LastHeartbeatTime { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesNodesNodesStatusConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditions">DataKubernetesNodesNodesStatusConditions</a>

---


### DataKubernetesNodesNodesStatusList <a name="DataKubernetesNodesNodesStatusList" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.get"></a>

```csharp
private DataKubernetesNodesNodesStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesNodesNodesStatusNodeInfoList <a name="DataKubernetesNodesNodesStatusNodeInfoList" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesStatusNodeInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.get"></a>

```csharp
private DataKubernetesNodesNodesStatusNodeInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesNodesNodesStatusNodeInfoOutputReference <a name="DataKubernetesNodesNodesStatusNodeInfoOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesStatusNodeInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.bootId">BootId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.containerRuntimeVersion">ContainerRuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.kernelVersion">KernelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.kubeletVersion">KubeletVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.kubeProxyVersion">KubeProxyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.machineId">MachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.osImage">OsImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.systemUuid">SystemUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfo">DataKubernetesNodesNodesStatusNodeInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `BootId`<sup>Required</sup> <a name="BootId" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.bootId"></a>

```csharp
public string BootId { get; }
```

- *Type:* string

---

##### `ContainerRuntimeVersion`<sup>Required</sup> <a name="ContainerRuntimeVersion" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.containerRuntimeVersion"></a>

```csharp
public string ContainerRuntimeVersion { get; }
```

- *Type:* string

---

##### `KernelVersion`<sup>Required</sup> <a name="KernelVersion" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.kernelVersion"></a>

```csharp
public string KernelVersion { get; }
```

- *Type:* string

---

##### `KubeletVersion`<sup>Required</sup> <a name="KubeletVersion" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.kubeletVersion"></a>

```csharp
public string KubeletVersion { get; }
```

- *Type:* string

---

##### `KubeProxyVersion`<sup>Required</sup> <a name="KubeProxyVersion" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.kubeProxyVersion"></a>

```csharp
public string KubeProxyVersion { get; }
```

- *Type:* string

---

##### `MachineId`<sup>Required</sup> <a name="MachineId" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.machineId"></a>

```csharp
public string MachineId { get; }
```

- *Type:* string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `OsImage`<sup>Required</sup> <a name="OsImage" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.osImage"></a>

```csharp
public string OsImage { get; }
```

- *Type:* string

---

##### `SystemUuid`<sup>Required</sup> <a name="SystemUuid" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.systemUuid"></a>

```csharp
public string SystemUuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesNodesNodesStatusNodeInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfo">DataKubernetesNodesNodesStatusNodeInfo</a>

---


### DataKubernetesNodesNodesStatusOutputReference <a name="DataKubernetesNodesNodesStatusOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesNodesNodesStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.addresses">Addresses</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList">DataKubernetesNodesNodesStatusAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.allocatable">Allocatable</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.capacity">Capacity</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList">DataKubernetesNodesNodesStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.nodeInfo">NodeInfo</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList">DataKubernetesNodesNodesStatusNodeInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatus">DataKubernetesNodesNodesStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.addresses"></a>

```csharp
public DataKubernetesNodesNodesStatusAddressesList Addresses { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusAddressesList">DataKubernetesNodesNodesStatusAddressesList</a>

---

##### `Allocatable`<sup>Required</sup> <a name="Allocatable" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.allocatable"></a>

```csharp
public StringMap Allocatable { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.capacity"></a>

```csharp
public StringMap Capacity { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.conditions"></a>

```csharp
public DataKubernetesNodesNodesStatusConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusConditionsList">DataKubernetesNodesNodesStatusConditionsList</a>

---

##### `NodeInfo`<sup>Required</sup> <a name="NodeInfo" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.nodeInfo"></a>

```csharp
public DataKubernetesNodesNodesStatusNodeInfoList NodeInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusNodeInfoList">DataKubernetesNodesNodesStatusNodeInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatusOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesNodesNodesStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesNodes.DataKubernetesNodesNodesStatus">DataKubernetesNodesNodesStatus</a>

---



