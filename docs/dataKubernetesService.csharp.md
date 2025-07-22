# `dataKubernetesService` Submodule <a name="`dataKubernetesService` Submodule" id="@cdktf/provider-kubernetes.dataKubernetesService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesService <a name="DataKubernetesService" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service kubernetes_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesService(Construct Scope, string Id, DataKubernetesServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig">DataKubernetesServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig">DataKubernetesServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.putMetadata"></a>

```csharp
private void PutMetadata(DataKubernetesServiceMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata">DataKubernetesServiceMetadata</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataKubernetesService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

DataKubernetesService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataKubernetesService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataKubernetesService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference">DataKubernetesServiceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList">DataKubernetesServiceSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.status">Status</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList">DataKubernetesServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata">DataKubernetesServiceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.metadata"></a>

```csharp
public DataKubernetesServiceMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference">DataKubernetesServiceMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.spec"></a>

```csharp
public DataKubernetesServiceSpecList Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList">DataKubernetesServiceSpecList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.status"></a>

```csharp
public DataKubernetesServiceStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList">DataKubernetesServiceStatusList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.metadataInput"></a>

```csharp
public DataKubernetesServiceMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata">DataKubernetesServiceMetadata</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesServiceConfig <a name="DataKubernetesServiceConfig" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DataKubernetesServiceMetadata Metadata,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata">DataKubernetesServiceMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service#id DataKubernetesService#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.metadata"></a>

```csharp
public DataKubernetesServiceMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata">DataKubernetesServiceMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service#metadata DataKubernetesService#metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service#id DataKubernetesService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataKubernetesServiceMetadata <a name="DataKubernetesServiceMetadata" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceMetadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the service that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the service. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata.property.name">Name</a></code> | <code>string</code> | Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the service must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the service that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service#annotations DataKubernetesService#annotations}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the service.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service#labels DataKubernetesService#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service#name DataKubernetesService#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which name of the service must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.38.0/docs/data-sources/service#namespace DataKubernetesService#namespace}

---

### DataKubernetesServiceSpec <a name="DataKubernetesServiceSpec" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceSpec {

};
```


### DataKubernetesServiceSpecPort <a name="DataKubernetesServiceSpecPort" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceSpecPort {

};
```


### DataKubernetesServiceSpecSessionAffinityConfig <a name="DataKubernetesServiceSpecSessionAffinityConfig" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceSpecSessionAffinityConfig {

};
```


### DataKubernetesServiceSpecSessionAffinityConfigClientIp <a name="DataKubernetesServiceSpecSessionAffinityConfigClientIp" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceSpecSessionAffinityConfigClientIp {

};
```


### DataKubernetesServiceStatus <a name="DataKubernetesServiceStatus" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceStatus {

};
```


### DataKubernetesServiceStatusLoadBalancer <a name="DataKubernetesServiceStatusLoadBalancer" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceStatusLoadBalancer {

};
```


### DataKubernetesServiceStatusLoadBalancerIngress <a name="DataKubernetesServiceStatusLoadBalancerIngress" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceStatusLoadBalancerIngress {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesServiceMetadataOutputReference <a name="DataKubernetesServiceMetadataOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata">DataKubernetesServiceMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadataOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesServiceMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceMetadata">DataKubernetesServiceMetadata</a>

---


### DataKubernetesServiceSpecList <a name="DataKubernetesServiceSpecList" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.get"></a>

```csharp
private DataKubernetesServiceSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesServiceSpecOutputReference <a name="DataKubernetesServiceSpecOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.allocateLoadBalancerNodePorts">AllocateLoadBalancerNodePorts</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.clusterIp">ClusterIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.clusterIps">ClusterIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.externalIps">ExternalIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.externalName">ExternalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.externalTrafficPolicy">ExternalTrafficPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.healthCheckNodePort">HealthCheckNodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.internalTrafficPolicy">InternalTrafficPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.ipFamilies">IpFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.ipFamilyPolicy">IpFamilyPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.loadBalancerClass">LoadBalancerClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.loadBalancerIp">LoadBalancerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.loadBalancerSourceRanges">LoadBalancerSourceRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.port">Port</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList">DataKubernetesServiceSpecPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.publishNotReadyAddresses">PublishNotReadyAddresses</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.selector">Selector</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.sessionAffinity">SessionAffinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.sessionAffinityConfig">SessionAffinityConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList">DataKubernetesServiceSpecSessionAffinityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpec">DataKubernetesServiceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocateLoadBalancerNodePorts`<sup>Required</sup> <a name="AllocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.allocateLoadBalancerNodePorts"></a>

```csharp
public IResolvable AllocateLoadBalancerNodePorts { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ClusterIp`<sup>Required</sup> <a name="ClusterIp" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.clusterIp"></a>

```csharp
public string ClusterIp { get; }
```

- *Type:* string

---

##### `ClusterIps`<sup>Required</sup> <a name="ClusterIps" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.clusterIps"></a>

```csharp
public string[] ClusterIps { get; }
```

- *Type:* string[]

---

##### `ExternalIps`<sup>Required</sup> <a name="ExternalIps" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.externalIps"></a>

```csharp
public string[] ExternalIps { get; }
```

- *Type:* string[]

---

##### `ExternalName`<sup>Required</sup> <a name="ExternalName" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.externalName"></a>

```csharp
public string ExternalName { get; }
```

- *Type:* string

---

##### `ExternalTrafficPolicy`<sup>Required</sup> <a name="ExternalTrafficPolicy" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.externalTrafficPolicy"></a>

```csharp
public string ExternalTrafficPolicy { get; }
```

- *Type:* string

---

##### `HealthCheckNodePort`<sup>Required</sup> <a name="HealthCheckNodePort" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.healthCheckNodePort"></a>

```csharp
public double HealthCheckNodePort { get; }
```

- *Type:* double

---

##### `InternalTrafficPolicy`<sup>Required</sup> <a name="InternalTrafficPolicy" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.internalTrafficPolicy"></a>

```csharp
public string InternalTrafficPolicy { get; }
```

- *Type:* string

---

##### `IpFamilies`<sup>Required</sup> <a name="IpFamilies" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.ipFamilies"></a>

```csharp
public string[] IpFamilies { get; }
```

- *Type:* string[]

---

##### `IpFamilyPolicy`<sup>Required</sup> <a name="IpFamilyPolicy" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.ipFamilyPolicy"></a>

```csharp
public string IpFamilyPolicy { get; }
```

- *Type:* string

---

##### `LoadBalancerClass`<sup>Required</sup> <a name="LoadBalancerClass" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.loadBalancerClass"></a>

```csharp
public string LoadBalancerClass { get; }
```

- *Type:* string

---

##### `LoadBalancerIp`<sup>Required</sup> <a name="LoadBalancerIp" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.loadBalancerIp"></a>

```csharp
public string LoadBalancerIp { get; }
```

- *Type:* string

---

##### `LoadBalancerSourceRanges`<sup>Required</sup> <a name="LoadBalancerSourceRanges" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.loadBalancerSourceRanges"></a>

```csharp
public string[] LoadBalancerSourceRanges { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.port"></a>

```csharp
public DataKubernetesServiceSpecPortList Port { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList">DataKubernetesServiceSpecPortList</a>

---

##### `PublishNotReadyAddresses`<sup>Required</sup> <a name="PublishNotReadyAddresses" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.publishNotReadyAddresses"></a>

```csharp
public IResolvable PublishNotReadyAddresses { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.selector"></a>

```csharp
public StringMap Selector { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.sessionAffinity"></a>

```csharp
public string SessionAffinity { get; }
```

- *Type:* string

---

##### `SessionAffinityConfig`<sup>Required</sup> <a name="SessionAffinityConfig" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.sessionAffinityConfig"></a>

```csharp
public DataKubernetesServiceSpecSessionAffinityConfigList SessionAffinityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList">DataKubernetesServiceSpecSessionAffinityConfigList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesServiceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpec">DataKubernetesServiceSpec</a>

---


### DataKubernetesServiceSpecPortList <a name="DataKubernetesServiceSpecPortList" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceSpecPortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.get"></a>

```csharp
private DataKubernetesServiceSpecPortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesServiceSpecPortOutputReference <a name="DataKubernetesServiceSpecPortOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceSpecPortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.appProtocol">AppProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.nodePort">NodePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.targetPort">TargetPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPort">DataKubernetesServiceSpecPort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppProtocol`<sup>Required</sup> <a name="AppProtocol" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.appProtocol"></a>

```csharp
public string AppProtocol { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodePort`<sup>Required</sup> <a name="NodePort" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.nodePort"></a>

```csharp
public double NodePort { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `TargetPort`<sup>Required</sup> <a name="TargetPort" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.targetPort"></a>

```csharp
public string TargetPort { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPortOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesServiceSpecPort InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecPort">DataKubernetesServiceSpecPort</a>

---


### DataKubernetesServiceSpecSessionAffinityConfigClientIpList <a name="DataKubernetesServiceSpecSessionAffinityConfigClientIpList" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceSpecSessionAffinityConfigClientIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.get"></a>

```csharp
private DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference <a name="DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIp">DataKubernetesServiceSpecSessionAffinityConfigClientIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesServiceSpecSessionAffinityConfigClientIp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIp">DataKubernetesServiceSpecSessionAffinityConfigClientIp</a>

---


### DataKubernetesServiceSpecSessionAffinityConfigList <a name="DataKubernetesServiceSpecSessionAffinityConfigList" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceSpecSessionAffinityConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.get"></a>

```csharp
private DataKubernetesServiceSpecSessionAffinityConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesServiceSpecSessionAffinityConfigOutputReference <a name="DataKubernetesServiceSpecSessionAffinityConfigOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceSpecSessionAffinityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.property.clientIp">ClientIp</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList">DataKubernetesServiceSpecSessionAffinityConfigClientIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfig">DataKubernetesServiceSpecSessionAffinityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIp`<sup>Required</sup> <a name="ClientIp" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.property.clientIp"></a>

```csharp
public DataKubernetesServiceSpecSessionAffinityConfigClientIpList ClientIp { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigClientIpList">DataKubernetesServiceSpecSessionAffinityConfigClientIpList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfigOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesServiceSpecSessionAffinityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceSpecSessionAffinityConfig">DataKubernetesServiceSpecSessionAffinityConfig</a>

---


### DataKubernetesServiceStatusList <a name="DataKubernetesServiceStatusList" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.get"></a>

```csharp
private DataKubernetesServiceStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesServiceStatusLoadBalancerIngressList <a name="DataKubernetesServiceStatusLoadBalancerIngressList" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceStatusLoadBalancerIngressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.get"></a>

```csharp
private DataKubernetesServiceStatusLoadBalancerIngressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesServiceStatusLoadBalancerIngressOutputReference <a name="DataKubernetesServiceStatusLoadBalancerIngressOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceStatusLoadBalancerIngressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngress">DataKubernetesServiceStatusLoadBalancerIngress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesServiceStatusLoadBalancerIngress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngress">DataKubernetesServiceStatusLoadBalancerIngress</a>

---


### DataKubernetesServiceStatusLoadBalancerList <a name="DataKubernetesServiceStatusLoadBalancerList" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceStatusLoadBalancerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.get"></a>

```csharp
private DataKubernetesServiceStatusLoadBalancerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesServiceStatusLoadBalancerOutputReference <a name="DataKubernetesServiceStatusLoadBalancerOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceStatusLoadBalancerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.property.ingress">Ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList">DataKubernetesServiceStatusLoadBalancerIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancer">DataKubernetesServiceStatusLoadBalancer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.property.ingress"></a>

```csharp
public DataKubernetesServiceStatusLoadBalancerIngressList Ingress { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerIngressList">DataKubernetesServiceStatusLoadBalancerIngressList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesServiceStatusLoadBalancer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancer">DataKubernetesServiceStatusLoadBalancer</a>

---


### DataKubernetesServiceStatusOutputReference <a name="DataKubernetesServiceStatusOutputReference" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Kubernetes;

new DataKubernetesServiceStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.property.loadBalancer">LoadBalancer</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList">DataKubernetesServiceStatusLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatus">DataKubernetesServiceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.property.loadBalancer"></a>

```csharp
public DataKubernetesServiceStatusLoadBalancerList LoadBalancer { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusLoadBalancerList">DataKubernetesServiceStatusLoadBalancerList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatusOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesServiceStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-kubernetes.dataKubernetesService.DataKubernetesServiceStatus">DataKubernetesServiceStatus</a>

---



